
const start = () => {
    const buttonAdd = document.querySelector('button');
    const buttonDelete = document.querySelectorAll('.delete-js');

    const updateEvent =()=> {
        buttonDelete.forEach((del) => {
            del.parentElement.innerHTML = del.parentElement.innerHTML;
        });
        buttonAdd.parentElement.innerHTML = buttonAdd.parentElement.innerHTML
        start()
    }

    const setWidthCard = () => {
        const columns = document.querySelectorAll('.column');
        const percent = 100 / columns.length
        columns.forEach(column => column.style.width = `calc(${percent}% - 40px)`)
    }
    const deleteColumn = (index) => {
        const columns = document.querySelectorAll('.column');
        columns[index].remove()
        updateEvent();
    }

    const addColumn = () => {
        const board = document.querySelector('.board-js');
        let div = document.createElement('div');
        div.className = "column";
        div.innerHTML = ` <div class="column__head">
                    <span class="column__name">
                        <img src="./Images/play-button2.png" alt="image">
                        <span>Eще столбец</span>
                    </span>
                    <span class="column__panel">
                        <img src="./Images/pen.png" alt="image" >
                        <img src="./Images/delete.png" alt="image" class="delete-js">
                    </span>
                    </div>
                    <div class="column__cards-container cards-container-js"></div>
                    <div class="column__add">
                        <img src="./Images/plus.png" alt="image">
                    </div>`

        board.append(div);
        updateEvent();
    }
    buttonDelete.forEach((del, index) => {
        del.addEventListener('click', () => deleteColumn(index))
    });
    buttonAdd.addEventListener('click', addColumn)
    setWidthCard();
}
const dragAndDrop = () => {
    const cards = document.querySelectorAll('.card-js');
    const containers  = document.querySelectorAll('.cards-container-js');
    const dragStart = async function () {
        setTimeout(() => {
            this.classList.add('hide');
        }, 0);
    };
    const dragEnd = function () {
        this.classList.remove('hide');
    };
    const dragOver = function (event) {
        event.preventDefault();
    };
    const drop = function () {
        const card = document.querySelector('.hide');
        this.append(card)
    };
    cards.forEach(card => {
        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragend', dragEnd);
    })
    containers.forEach(container => {
        container.addEventListener('dragover', dragOver);
        container.addEventListener('drop', drop);
    })
}

start();
dragAndDrop();

