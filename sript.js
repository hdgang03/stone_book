//1. precizitás 
//2. következetesség, megfelelő változó, függvény, stb nevek 
//3. algoritmikus gondolkodás

function pageLoad() {

    const root = document.getElementById('root');
    let notes = [];



    /*
    JS 2 Tabolás
        function changeTheme() {
            document.body.classList.toggle("light");
            document.body.classList.toggle("dark");
            let cards = document.querySelectorAll(".movie-card");
            for (let x = 0; x < cards.length; x++) {
                const element = cards[x];
                element.classList.toggle("light");
                element.classList.toggle("dark");
                element.classList.toggle("border");
            }
        }
    */
    /*
    JS 3 Függvények hívása
        function fireSyringe() {
            let syringe = createSyringeElement();
            playArea.appendChild(syringe);
            moveSyringe(syringe);
        }
    */
    /*
        notes.push({
            tag: "div",
            content: ` HTML 1 Mindig legyen lezáró tag!`
        });
    
        notes.push({
            tag: "code",
            content: `<a href=""></a>`
        });
    
        notes.push({
            tag: "div",
            content: ` HTML 2 Strukturáltság`
        });
    
        notes.push({
            tag: "code",
            content: ` <aside>
            this is the sidebar
        </aside>
        <section>
            <article>
                <header>
                    <h1>this is the title</h1>
                    <h2>this is the subtitle</h2>
                </header>
                <p>this is the first paragraph</p>
                <p>this is the second paragraph</p>
            </article>
        </section>`
        });
        */

    notes.push({
        tag: "div",
        content: ` CSS 1
        Pontos hivatkozás`
    });

    notes.push({
        tag: "code",
        content: `.social a img { <br>
            &nbsp;  margin: 8px auto;<br>
            &nbsp; height: 64px;<br>
            &nbsp; width: 64px;<br>
        }`
    });

    notes.push({
        tag: "div",
        content: `CSS 2 Sassban importálás, Watch Sass!!!`
    });

    notes.push({
        tag: "code",
        content: `@import url('https://fonts.googleapis.com/css2?family=Goldman:wght@700&family=Roboto+Slab&display=swap');<br>
        @import "variables";<br>
        @import "navbar";`
    });

    notes.push({
        tag: "div",
        content: `CSS 3 Positioning`
    });

    notes.push({
        tag: "code",
        content: `#parent {<br>
            &nbsp; position: relative;<br>
        }<br>
        <br>
        #child {<br>
            &nbsp;  position: absolute;<br>
            &nbsp;  right: 40px;<br>
            &nbsp;  top: 150px;<br>
        }`
    });

    notes.push({
        tag: "div",
        content: `JS 1 Elnevezés`
    });

    notes.push({
        tag: "code",
        content: ``
    });

    notes.push({
        tag: "div",
        content: ` JS 2 Tabolás`
    });

    notes.push({
        tag: "code",
        content: `
        function changeTheme() {<br>
            &nbsp;  document.body.classList.toggle("light");<br>
            &nbsp; document.body.classList.toggle("dark");<br>
            &nbsp; let cards = document.querySelectorAll(".movie-card");<br>
            &nbsp; for (let x = 0; x < cards.length; x++) {<br>
                &nbsp; &nbsp;  const element = cards[x];<br>
                &nbsp; &nbsp;   element.classList.toggle("light");<br>
                &nbsp; &nbsp;  element.classList.toggle("dark");<br>
                &nbsp; &nbsp;  element.classList.toggle("border");<br>
                &nbsp;  }<br>
        }`
    });

    notes.push({
        tag: "div",
        content: `JS 3 Függvények hívása`
    });

    notes.push({
        tag: "code",
        content: `
        function fireSyringe() {<br>
            &nbsp;  let syringe = createSyringeElement();<br>
            &nbsp;  playArea.appendChild(syringe);<br>
            &nbsp;  moveSyringe(syringe);<br>
        }`
    });
    for (note of notes) {
        root.insertAdjacentHTML('beforeend', `
        <${note.tag}>${note.content}<${note.tag}`);
    }

}

window.addEventListener('load', pageLoad);
