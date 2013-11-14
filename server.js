/*  Start the Server Socket */
var io = require('socket.io').listen(820);

var clients = []; //  Client list

var maxdistance = 2000; //  Max distance to send to clients

/* This just calculate distance between points  */
function distance(x1, y1, x2, y2) {
    return Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
}
/*  Send a notification to all clients  */
function sendtoall(action, data, cid) {
    for (var n in clients) {
        if (clients[n].socket != null && !clients[n].socket.disconnected && clients[n].cid != cid)
            clients[n].socket.emit(action, data);
    }
}

/*  This reviews the client list, and removes who is not connected anymore  */
function reviewClients() {
    var removeList = [];
    for (var n in clients)
        if (clients[n].socket.disconnected)
            removeList.push(clients[n]);

    for (var i = removeList.length - 1; i >= 0; i--) {
        console.log("Removendo " + removeList[i].cid);
        var idx = clients.indexOf(removeList[i]);
        if (idx != -1)
            clients.splice(idx, 1);
        sendtoall("playerdisconnected", {
            cid: removeList[i].cid
        });
    }

}

/*  The Main Server Stuff. Executed when someone connects to our server */
io.sockets.on('connection', function (socket) {
    //  Generates a client data with a random name.
    var client = {
        'cid': 'pc-' + Math.round(Math.random() * 1000),
        x: 0,
        y: 0,
        angle: 0,
        'socket': socket
    };
    console.log("Novo jogador " + client.cid);

    // Send data back to the client
    socket.emit('onconnect', {
        'cid': client.cid,
        x: client.x,
        y: client.y,
        angle: client.angle
    });

    //  Tell the player that connected now, what players are near him.
    for (var n in clients) {
        if (clients[n].cid != client.cid && distance(0, 0, clients[n].x, clients[n].y) < maxdistance)
            socket.emit('newplayer', {
                'cid': clients[n].cid,
                x: clients[n].x,
                y: clients[n].y,
                angle: clients[n].angle
            });
    }

    // Tell other players that one person connected
    for (var n in clients) {
        if (clients[n].socket != null)
            clients[n].socket.emit('newplayer', {
                'cid': client.cid,
                x: client.x,
                y: client.y,
                angle: client.angle
            });
    }
    //  Add to client list
    clients.push(client);

    // Keep alive
    socket.on('my other event', function (data) {
        setInterval(function () {
            socket.emit('keepalive', true);
        }, 10000);
    });

    //  Receive update position events
    socket.on('updatepos', function (data) {
        reviewClients();
        var client = null;
        for (var c in clients) {
            if (clients[c].cid === data.cid) {
                client = clients[c];
                break;
            }
        }
        if (client != null) {
            client.x = data.x;
            client.y = data.y;
            client.angle = data.angle;
            //  Notify other players
            for (var n in clients)
                if (clients[n].cid != data.cid && clients[n].socket != null && distance(clients[n].x, clients[n].y, data.x, data.y) < maxdistance)
                    clients[n].socket.emit('updatepos', {
                        'cid': client.cid,
                        x: client.x,
                        y: client.y,
                        angle: client.angle,
                        onlyrotation: data.onlyrotation
                    });
        }
    });
});
