(function() {
    ("use strict");
    const body = document.querySelector("body");

    ///// OBJECT BASICS 1 \\\\\

    function object1() {
        const section = document.createElement("section");
        let cat = {
        name : 'Bertie',
        breed : 'Cymric',
        color : 'white',
        greeting: function() {
            console.log('Meow!');
            }
        }

        // Put your code here

        const catName = cat["name"];
        cat.greeting();
        cat.color = "black";

        // Don't edit the code below here

        let para1 = document.createElement('p');
        let para2 = document.createElement('p');

        para1.textContent = `The cat's name is ${ catName }.`;
        para2.textContent = `The cat's color is ${ cat.color }.`;

        section.appendChild(para1);
        section.appendChild(para2);
    }

    object1();

    ///// OBJECT BASICS 2 \\\\\

    function object2() {
        const section = document.createElement("section");
        let bandInfo;

        // Put your code here

        band = {
        name: "The Mad Hatters",
        nationality: "Canadian",
        genre: "psychedelic rock",
        members: 3,
        formed: 1989,
        split: false,
        albums: [
            {
            name: "Chains of Horror",
            released: 1991,
            },
            {
            name: "The Sun Does Rise",
            released: 1995,
            },
        ],
        };

        bandInfo = `${band.name} are a ${band.nationality} ${band.genre} group formed in ${band.formed}. They have ${band.members} members, and their first album was ${band.albums[0].name}, released in ${band.albums[0].released}.`

        // Don't edit the code below here

        let para1 = document.createElement('p');
        para1.textContent = bandInfo;
        section.appendChild(para1);
    }

    object2()

    ///// OBJECT BASICS 3 \\\\\

    function object3() {
        const section = document.createElement("section");
        let cat = {
            name: 'Bertie',
            breed: 'Cymric',
            color: 'white',
            greeting: function() {
                console.log(`Hello, said ${this.name} the ${this.breed}.`);
            }
        };

        let cat2 = {
            name: 'Wolf',
            breed: 'Maine coon',
            color: 'gray',
            greeting: function() {
                console.log(`Hello, said ${this.name} the ${this.breed}.`);
            }
        };

        cat.greeting()
        cat2.greeting()
    }

    object3()
})();