export const initMessages = [
    {
        post: '<p>Hello, everyone.</p><p>I am writing this post to let <strong>everyone</strong> know what you can now reply to messages. This is super good!</p><p>We have just a <i>few</i> more things to do, now:</p><ol><li>You can reply, but you currently cannot create posts!</li><li>The setup would be ugly, but using reducers and/or Redux could go a long way</li><li>We need to add the like feature</li><li>We need the navigation bar</li></ol>',
        likes: 400,
        dislikes: 0,
        id: 0,
        replies: [
            {
                post: '<p>We really do have a lot done. <strong>I THINK WE SHOULD GET VOTED BEST FOR THESE REASONS</strong></p><ul><li>Piazza looks funny<ul><li>Ours looks funny too, but at least we can say we are noobs</li></ul></li><li>The source code for ours is available</li><li>It has a weird rich text editor</li><li>It is the best</li></ul><p>Please consider all of the above</p>',
                likes: 200,
                dislikes: 0,
                id: 2
            }
        ]
    },
    {
        post: '<p>Does anyone wanna place tik tak toe?</p><figure class=\"table\"><table><tbody><tr><td>X</td><td>X</td><td>O</td></tr><tr><td>X</td><td>O</td><td>O</td></tr><tr><td>O</td><td>X</td><td>X</td></tr></tbody></table></figure><p>Good game!</p>',
        likes: 400,
        dislikes: 0,
        id: 1,
        replies: [
            {
                post: "<p>Awesome game! Maybe <i>next time</i> I'll have a better shot of <strong>WINNING!</strong></p>",
                likes: 200,
                dislikes: 0,
                id: 3
            },
            {
                post: "<p>Can I get in on the next round?</p>",
                likes: 200,
                dislikes: 0,
                id: 4
            },
            {
                post: "<p>Absolutely!</p>",
                likes: 200,
                dislikes: 0,
                id: 5
            }
        ]
    }
];
