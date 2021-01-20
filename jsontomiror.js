async function json_to_miro(json)
{ 
    let count = 0;
    for (const [key, element] of Object.entries(json)){
 
        if (typeof(element) == "object")
        {
            var shape = (await miro.board.widgets.create({type:'shape', text: key, y: count, width: 600, scale: 2.0, style:{fontSize: 64, backgroundColor: "#FEF445"}}))[0]

            count += 200

            if (Array.isArray(element))
            {
                let count2 = 0;
                for (const value of element) {
                    
                    await miro.board.widgets.create({type:'shape', text: `${count2}`, y: count, x: 300, width: 600, scale: 2.0, style:{fontSize: 64, backgroundColor: "#ff00ff"}})
                    count += 200
                    for (const [k, elem] of Object.entries(value)) {
                        if (typeof(elem) != "object")
                        {
                            let card = (await miro.board.widgets.create(
                                {type:'card', title: `${k}:${elem} ${typeof(elem)}`, y: count, x: 600, scale: 2.0}
                            ))[0]
                            // let line = (await miro.board.widgets.create(
                            //     {type:'line', startWidgetId: shape.id, endWidgetId: card.id }
                            // ))[0]
                        }
                        count += 200
                    };
                    count2++;
                }
            }
            else
            {
                for (const [k, elem] of Object.entries(element)) {

                    if (typeof(elem) != "object")
                    {
                        let card = (await miro.board.widgets.create(
                            {type:'card', title: `${k}:${elem} ${typeof(elem)}`, y: count, x: 600, scale: 2.0}
                        ))[0]
                        // let line = (await miro.board.widgets.create(
                        //     {type:'line', startWidgetId: shape.id, endWidgetId: card.id }
                        // ))[0]
                    }
                    count += 200
                };
                count += 200
            }
        }
        else {
            let card = (await miro.board.widgets.create(
                {type:'card', title: `${key}:${element} ${typeof(element)}`, y: count, scale: 2.0}
                ))[0]
        }
        count += 200
    };
}