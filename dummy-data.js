const titles = [
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "qui est esse",
    "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "eum et est occaecati",
    "nesciunt quas odio",
    "dolorem eum magni eos aperiam quia",
    "dolorem dolore est ipsam",
    "nesciunt iure omnis dolorem tempora et accusantium",
    'Welcome to plaza',
    'Hello dude yoooo does this overflow',
    "You guys, I just found this great app piaza, when will you guys get on it!?"
]

const generateData = () => {
    return titles.map(
        title => ({
            title,
            post: `<p>${title}<br>${title}</p>`,
            votes: parseInt(Math.random() * 100),
            id: globalThis.crypto.randomUUID(),
            replies: titles.map(
                data => ({
                    title: data,
                    post: `<p>${data}<br>${data}</p>`,
                    votes: parseInt(Math.random() * 100),
                    id: globalThis.crypto.randomUUID()
                })
            )
        })
    );
}

export const initMessages = [
    {
        title: 'Welcome to plaza',
        post: '<p>Hello, everyone.</p><p>I am writing this post to let <strong>everyone</strong> know what you can now reply to messages. This is super good!</p><p>We have just a <i>few</i> more things to do, now:</p><ol><li>You can reply, but you currently cannot create posts!</li><li>The setup would be ugly, but using reducers and/or Redux could go a long way</li><li>We need to add the like feature</li><li>We need the navigation bar</li></ol>',
        votes: 10,
        id: globalThis.crypto.randomUUID(), // globalThis.crypto.randomUUID(),
        replies: [
            {
                post: '<p>We really do have a lot done. <strong>I THINK WE SHOULD GET VOTED BEST FOR THESE REASONS</strong></p><ul><li>Piazza looks funny<ul><li>Ours looks funny too, but at least we can say we are noobs</li></ul></li><li>The source code for ours is available</li><li>It has a weird rich text editor</li><li>It is the best</li></ul><p>Please consider all of the above</p>',
                votes: 200,
                id: globalThis.crypto.randomUUID(), // 1
            }
        ]
    },
    {
        title: 'Hello dude yoooo does this overflow',
        post: '<p>Does anyone wanna place tik tak toe?</p><figure class=\"table\"><table><tbody><tr><td>X</td><td>O</td><td>-</td></tr><tr><td>-</td><td>O</td><td>-</td></tr><tr><td>X</td><td>O</td><td>X</td></tr></tbody></table></figure><p>Good game!</p>',
        votes: 11,
        id: globalThis.crypto.randomUUID(), // 2,
        replies: [
            {
                post: "<p>Awesome game! Maybe <i>next time</i> I'll have a better shot of <strong>WINNING!</strong></p>",
                votes: 200,
                id: globalThis.crypto.randomUUID(), // 3
            },
            {
                post: "<p>Can I get in on the next round?</p>",
                votes: 200,
                id: globalThis.crypto.randomUUID(), // 4
            },
            {
                post: "<p>Absolutely!</p>",
                votes: 200,
                id: globalThis.crypto.randomUUID(), // 5
            }
        ]
    },
    {
        title: 'Isn\' plaza great!',
        post: '<p>Porting to C++ is largely the search-and-replace I described in lecture.&nbsp; The deviations from this come from the change of names of those things I turned into classes.</p><p>&nbsp;</p><p>Most changes are made with a nod toward expediency.&nbsp; For instance, I made things classes essentially in name only.&nbsp; They\'re really glorified structs.&nbsp; Some of these may get fleshed out a bit in subsequent assignments, but retrofitting a real OO design into this would be a ridiculous undertaking, essentially a full rewrite.</p><p>&nbsp;</p><p>With NPC and PC now inheriting from Character, we can lose the *npc and *pc fields from Character that we used to have.&nbsp; Those allowed us to do a sort of \'poor mans\' polymorphism, but we have the real thing now.&nbsp; Note the use of dynamic_cast liberally throughout.&nbsp; We\'ll talk about this before too long.</p><p>&nbsp;</p><p>All the new stuff is in db_parse.*.&nbsp; I build the arrays 1 indexed because the databases themselves are 1 indexed.&nbsp; This allows you to index with, e.g., the pokemon ID, rather than the pokemon ID - 1.</p><p>&nbsp;</p><p>You may notice that my new code is very C style.&nbsp; That\'s because I wrote it months ago when I was working to reverse engineer the databases.&nbsp; I considered rewriting it so that I could give you some more C++-style code.&nbsp; I decided against this for two reasons:</p><p>&nbsp;</p><ol><li>I didn\'t want to give you another late drop</li><li>I have \"issues\" with the performance of dynamic data structures used in such a static manner.</li></ol>',
        votes: 49,
        id: globalThis.crypto.randomUUID(), // 'f9485376-df3c-4341-a6e5-31cc0bfb17d1',
        replies: [
            {
                post: '<p>Hello, everyone.</p><p>I am writing this post to let <strong>everyone</strong> know what you can now reply to messages. This is super good!</p><p>We have just a <i>few</i> more things to do, now:</p><ol><li>You can reply, but you currently cannot create posts!</li><li>The setup would be ugly, but using reducers and/or Redux could go a long way</li><li>We need to add the like feature</li><li>We need the navigation bar</li></ol>',
                votes: 200,
                id: globalThis.crypto.randomUUID(), // 2
            }
        ]
    },
    {
        title: "You guys, I just found this great app piaza, when will you guys get on it!?",
        post: '<p>Porting to C++ is largely the search-and-replace I described in lecture.&nbsp; The deviations from this come from the change of names of those things I turned into classes.</p><p>&nbsp;</p><p>Most changes are made with a nod toward expediency.&nbsp; For instance, I made things classes essentially in name only.&nbsp; They\'re really glorified structs.&nbsp; Some of these may get fleshed out a bit in subsequent assignments, but retrofitting a real OO design into this would be a ridiculous undertaking, essentially a full rewrite.</p><p>&nbsp;</p><p>With NPC and PC now inheriting from Character, we can lose the *npc and *pc fields from Character that we used to have.&nbsp; Those allowed us to do a sort of \'poor mans\' polymorphism, but we have the real thing now.&nbsp; Note the use of dynamic_cast liberally throughout.&nbsp; We\'ll talk about this before too long.</p><p>&nbsp;</p><p>All the new stuff is in db_parse.*.&nbsp; I build the arrays 1 indexed because the databases themselves are 1 indexed.&nbsp; This allows you to index with, e.g., the pokemon ID, rather than the pokemon ID - 1.</p><p>&nbsp;</p><p>You may notice that my new code is very C style.&nbsp; That\'s because I wrote it months ago when I was working to reverse engineer the databases.&nbsp; I considered rewriting it so that I could give you some more C++-style code.&nbsp; I decided against this for two reasons:</p><p>&nbsp;</p><ol><li>I didn\'t want to give you another late drop</li><li>I have \"issues\" with the performance of dynamic data structures used in such a static manner.</li></ol>',
        votes: 73,
        id: globalThis.crypto.randomUUID(), // 'c64e3d47-bcff-4bf6-9fe6-d9a0fdd54716',
        replies: [
            {
                post: '<p>Hello, everyone.</p><p>I am writing this post to let <strong>everyone</strong> know what you can now reply to messages. This is super good!</p><p>We have just a <i>few</i> more things to do, now:</p><ol><li>You can reply, but you currently cannot create posts!</li><li>The setup would be ugly, but using reducers and/or Redux could go a long way</li><li>We need to add the like feature</li><li>We need the navigation bar</li></ol>',
                votes: 45,
                id: globalThis.crypto.randomUUID(), // 0
            },
            {
                post: "<p>Awesome game! Maybe <i>next time</i> I'll have a better shot of <strong>WINNING!</strong></p>",
                votes: 12,
                id: globalThis.crypto.randomUUID(), // 1
            },
            {
                post: "<p>Can I get in on the next round?</p>",
                votes: 8,
                id: globalThis.crypto.randomUUID(), // 2
            },
            {
                post: "<p>Absolutely!</p>",
                votes: 5,
                id: globalThis.crypto.randomUUID(), // 3
            },
            {
                post: "<p>Awesome game! Maybe <i>next time</i> I'll have a better shot of <strong>WINNING!</strong></p>",
                votes: 3,
                id: globalThis.crypto.randomUUID(), // 4
            },
            {
                post: "<p>Can I get in on the next round?</p>",
                votes: 7,
                id: globalThis.crypto.randomUUID(), // 5
            },
            {
                post: "<p>Absolutely!</p>",
                votes: 4,
                id: globalThis.crypto.randomUUID(), // 6
            }
        ]
    },
    {
        title: 'Welcome to plaza',
        post: '<p>Hello, everyone.</p><p>I am writing this post to let <strong>everyone</strong> know what you can now reply to messages. This is super good!</p><p>We have just a <i>few</i> more things to do, now:</p><ol><li>You can reply, but you currently cannot create posts!</li><li>The setup would be ugly, but using reducers and/or Redux could go a long way</li><li>We need to add the like feature</li><li>We need the navigation bar</li></ol>',
        votes: 10,
        id: globalThis.crypto.randomUUID(), // 0,
        replies: [
            {
                post: '<p>We really do have a lot done. <strong>I THINK WE SHOULD GET VOTED BEST FOR THESE REASONS</strong></p><ul><li>Piazza looks funny<ul><li>Ours looks funny too, but at least we can say we are noobs</li></ul></li><li>The source code for ours is available</li><li>It has a weird rich text editor</li><li>It is the best</li></ul><p>Please consider all of the above</p>',
                votes: 200,
                id: globalThis.crypto.randomUUID(), // 2
            }
        ]
    },
    {
        title: 'Hello dude yoooo does this overflow',
        post: '<p>Does anyone wanna place tik tak toe?</p><figure class=\"table\"><table><tbody><tr><td>X</td><td>O</td><td>-</td></tr><tr><td>-</td><td>O</td><td>-</td></tr><tr><td>X</td><td>O</td><td>X</td></tr></tbody></table></figure><p>Good game!</p>',
        votes: 11,
        id: globalThis.crypto.randomUUID(), // 1,
        replies: [
            {
                post: "<p>Awesome game! Maybe <i>next time</i> I'll have a better shot of <strong>WINNING!</strong></p>",
                votes: 200,
                id: globalThis.crypto.randomUUID(), // 3
            },
            {
                post: "<p>Can I get in on the next round?</p>",
                votes: 200,
                id: globalThis.crypto.randomUUID(), // 4
            },
            {
                post: "<p>Absolutely!</p>",
                votes: 200,
                id: globalThis.crypto.randomUUID(), // 5
            }
        ]
    },
    {
        title: 'Assignment 1.06 Solutions',
        post: '<p>Porting to C++ is largely the search-and-replace I described in lecture.&nbsp; The deviations from this come from the change of names of those things I turned into classes.</p><p>&nbsp;</p><p>Most changes are made with a nod toward expediency.&nbsp; For instance, I made things classes essentially in name only.&nbsp; They\'re really glorified structs.&nbsp; Some of these may get fleshed out a bit in subsequent assignments, but retrofitting a real OO design into this would be a ridiculous undertaking, essentially a full rewrite.</p><p>&nbsp;</p><p>With NPC and PC now inheriting from Character, we can lose the *npc and *pc fields from Character that we used to have.&nbsp; Those allowed us to do a sort of \'poor mans\' polymorphism, but we have the real thing now.&nbsp; Note the use of dynamic_cast liberally throughout.&nbsp; We\'ll talk about this before too long.</p><p>&nbsp;</p><p>All the new stuff is in db_parse.*.&nbsp; I build the arrays 1 indexed because the databases themselves are 1 indexed.&nbsp; This allows you to index with, e.g., the pokemon ID, rather than the pokemon ID - 1.</p><p>&nbsp;</p><p>You may notice that my new code is very C style.&nbsp; That\'s because I wrote it months ago when I was working to reverse engineer the databases.&nbsp; I considered rewriting it so that I could give you some more C++-style code.&nbsp; I decided against this for two reasons:</p><p>&nbsp;</p><ol><li>I didn\'t want to give you another late drop</li><li>I have \"issues\" with the performance of dynamic data structures used in such a static manner.</li></ol>',
        votes: 49,
        id: globalThis.crypto.randomUUID(), // 'f9485376-df3c-4341-a6e5-31cc0bfb17d1',
        replies: [
            {
                post: '<p>Hello, everyone.</p><p>I am writing this post to let <strong>everyone</strong> know what you can now reply to messages. This is super good!</p><p>We have just a <i>few</i> more things to do, now:</p><ol><li>You can reply, but you currently cannot create posts!</li><li>The setup would be ugly, but using reducers and/or Redux could go a long way</li><li>We need to add the like feature</li><li>We need the navigation bar</li></ol>',
                votes: 45,
                id: globalThis.crypto.randomUUID(), // 0
            },
            {
                post: "<p>Awesome game! Maybe <i>next time</i> I'll have a better shot of <strong>WINNING!</strong></p>",
                votes: 12,
                id: globalThis.crypto.randomUUID(), // 1
            },
            {
                post: "<p>Can I get in on the next round?</p>",
                votes: 8,
                id: globalThis.crypto.randomUUID(), // 2
            },
            {
                post: "<p>Absolutely!</p>",
                votes: 5,
                id: globalThis.crypto.randomUUID(), // 3
            },
            {
                post: "<p>Awesome game! Maybe <i>next time</i> I'll have a better shot of <strong>WINNING!</strong></p>",
                votes: 3,
                id: globalThis.crypto.randomUUID(), // 4
            },
            {
                post: "<p>Can I get in on the next round?</p>",
                votes: 7,
                id: globalThis.crypto.randomUUID(), // 5
            },
            {
                post: "<p>Absolutely!</p>",
                votes: 4,
                id: globalThis.crypto.randomUUID(), // 6
            }
        ]
    },
    {
        title: 'This is the solution to assignment 1.02, you should definently use it lol!!!!',
        post: '<p>Porting to C++ is largely the search-and-replace I described in lecture.&nbsp; The deviations from this come from the change of names of those things I turned into classes.</p><p>&nbsp;</p><p>Most changes are made with a nod toward expediency.&nbsp; For instance, I made things classes essentially in name only.&nbsp; They\'re really glorified structs.&nbsp; Some of these may get fleshed out a bit in subsequent assignments, but retrofitting a real OO design into this would be a ridiculous undertaking, essentially a full rewrite.</p><p>&nbsp;</p><p>With NPC and PC now inheriting from Character, we can lose the *npc and *pc fields from Character that we used to have.&nbsp; Those allowed us to do a sort of \'poor mans\' polymorphism, but we have the real thing now.&nbsp; Note the use of dynamic_cast liberally throughout.&nbsp; We\'ll talk about this before too long.</p><p>&nbsp;</p><p>All the new stuff is in db_parse.*.&nbsp; I build the arrays 1 indexed because the databases themselves are 1 indexed.&nbsp; This allows you to index with, e.g., the pokemon ID, rather than the pokemon ID - 1.</p><p>&nbsp;</p><p>You may notice that my new code is very C style.&nbsp; That\'s because I wrote it months ago when I was working to reverse engineer the databases.&nbsp; I considered rewriting it so that I could give you some more C++-style code.&nbsp; I decided against this for two reasons:</p><p>&nbsp;</p><ol><li>I didn\'t want to give you another late drop</li><li>I have \"issues\" with the performance of dynamic data structures used in such a static manner.</li></ol>',
        votes: 73,
        id: globalThis.crypto.randomUUID(), // 'c64e3d47-bcff-4bf6-9fe6-d9a0fdd54716',
        replies: [
            {
                post: '<p>Hello, everyone.</p><p>I am writing this post to let <strong>everyone</strong> know what you can now reply to messages. This is super good!</p><p>We have just a <i>few</i> more things to do, now:</p><ol><li>You can reply, but you currently cannot create posts!</li><li>The setup would be ugly, but using reducers and/or Redux could go a long way</li><li>We need to add the like feature</li><li>We need the navigation bar</li></ol>',
                votes: 45,
                id: globalThis.crypto.randomUUID(), // 0
            },
            {
                post: "<p>Awesome game! Maybe <i>next time</i> I'll have a better shot of <strong>WINNING!</strong></p>",
                votes: 12,
                id: globalThis.crypto.randomUUID(), // 1
            },
            {
                post: "<p>Can I get in on the next round?</p>",
                votes: 8,
                id: globalThis.crypto.randomUUID(), // 2
            },
            {
                post: "<p>Absolutely!</p>",
                votes: 5,
                id: globalThis.crypto.randomUUID(), // 3
            },
            {
                post: "<p>Awesome game! Maybe <i>next time</i> I'll have a better shot of <strong>WINNING!</strong></p>",
                votes: 3,
                id: globalThis.crypto.randomUUID(), // 4
            },
            {
                post: "<p>Can I get in on the next round?</p>",
                votes: 7,
                id: globalThis.crypto.randomUUID(), // 5
            },
            {
                post: "<p>Absolutely!</p>",
                votes: 4,
                id: globalThis.crypto.randomUUID(), // 6
            }
        ]
    },
    {
        title: 'When is Elon Musk going to buy Plaza? It is a great app and I think he would make tons of profit off of it.',
        post: '<p>It would be such a good investment!</p>',
        id: globalThis.crypto.randomUUID(), // '01928oiasu',
        votes: 129,
        replies: [
            {
                post: "<p>I think that would be an awesome idea!</p>",
                votes: 7,
                id: globalThis.crypto.randomUUID(), // 5
            }
        ]
    },
    ...generateData(),
    ...generateData()
];
