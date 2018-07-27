module.exports = function(robot){
    robot.respond(/hello/, function(res){
        res.send('world');
    });

    robot.respond(/安安/, function(res){
        res.send('安安你好');
    });
}

