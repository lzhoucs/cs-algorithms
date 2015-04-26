var     crTool  = require('../tools/courseraTool'),
        app4  = require('../application/SCCByDFS');


crTool.get2DNumberArray('http://spark-public.s3.amazonaws.com/algo1/programming_prob/SCC.txt', app4.SCCByDFS);

