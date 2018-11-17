function Post() {
    var test = 1;
};

Post.prototype.TYPES = [
    "Letters (Stamped)",
    "Letters (Metered)",
    "Large Envelopes (Flats)",
    "First-Class Package Service - Retail"
];
    
    
Post.prototype.COSTS = [
    [
            { weight: 1, total: 0.5 },
            { weight: 2, total: 0.71 },
            { weight: 3, total: 0.92 },
            { weight: 3.5, total: 1.13 }
    ],
    [
            { weight: 1, total: 0.47 },
            { weight: 2, total: 0.68 },
            { weight: 3, total: 0.89 },
            { weight: 3.5, total: 1.10 }
    ],
    [
            { weight: 1, total: 1 },
            { weight: 2, total: 1.21 },
            { weight: 3, total: 1.42 },
            { weight: 4, total: 1.63 },
            { weight: 5, total: 1.84 },
            { weight: 6, total: 2.05 },
            { weight: 7, total: 2.26 },
            { weight: 8, total: 2.47 },
            { weight: 9, total: 2.68 },
            { weight: 10, total: 2.89 },
            { weight: 11, total: 3.10 },
            { weight: 12, total: 3.31 },
            { weight: 13, total: 3.52 }
    ],
    [
            { weight: 1, total: 3.5 },
            { weight: 2, total: 3.5 },
            { weight: 3, total: 3.5 },
            { weight: 4, total: 3.5 },
            { weight: 5, total: 3.75 },
            { weight: 6, total: 3.75 },
            { weight: 7, total: 3.75 },
            { weight: 8, total: 3.75 },
            { weight: 9, total: 4.1 },
            { weight: 10, total: 4.45 },
            { weight: 11, total: 4.80 },
            { weight: 12, total: 5.15 },
            { weight: 13, total: 5.5 }
    ]
];

Post.prototype.calcTotal = function( type, weight ) {
    
    //console.log("Type: " + type + "  Weight: " + Number(weight));
    
    var typeId = -1;
    for ( var i = 0; i < post.TYPES.length; i++ ) {
        if ( type === post.TYPES[i] ) { 
            typeId = i;
            break;
        }
    }    
    if ( typeId === -1 ) return "{error:'Invalid Type'}";
    
    //console.log("typeId: " + typeId);
    
    var total = 0;
    for ( var i = 0; i < post.COSTS[typeId].length; i++ ) {
        //console.log("compare " + weight + " to: " + post.COSTS[typeId][i].weight );
        if ( Number(weight) >= post.COSTS[typeId][i].weight ) total = post.COSTS[typeId][i].total;
        else break;
    }
    
    var rtn = {
        type: type,
        weight: weight,
        total: total
    };
    return rtn;
}

var post = new Post();

module.exports = post;

