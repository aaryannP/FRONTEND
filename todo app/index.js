const maincontainer = document.querySelector('.maincontainer')
const input = document.querySelector('input')
const submit = document.querySelector('.submit')
const todo = document.querySelector('.todo')

let arr = [
    "First Todo",
    "Second Todo",
    "Third Todo"
]

let editP = null;
let globalIndex;

function refreshtodo(ptext, index)
{
    const p = document.createElement('p');
    const minicontainer = document.createElement('div');
    const editbtn = document.createElement('button');
    const delbtn = document.createElement('button');
    const btnwrp = document.createElement('div');
    
    todo.append(minicontainer);
    minicontainer.append(p, btnwrp);
    btnwrp.append(editbtn, delbtn);
    
    p.textContent = ptext;
    editbtn.textContent = 'Edit';
    delbtn.textContent = 'Delete';
    
    minicontainer.classList.add('minicontainer');
    btnwrp.classList.add('btnwrp');

    delbtn.addEventListener('click', () => {
        minicontainer.remove();
        arr = arr.filter(item => item !== ptext);
        console.log(arr);
    });

    editbtn.addEventListener('click', () => {
        input.value = p.textContent;

        editP = p;
        globalIndex = index;

        submit.textContent = 'Update';
    });
}

arr.forEach((item, index) => refreshtodo(item, index));

input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        submit.click();
    }
});

submit.addEventListener('click', () => {

    if(input.value.trim() !== '')
    {
        if(editP === null)
        {
            refreshtodo(input.value, arr.length);
            arr.push(input.value);
        }
        else
        {
            editP.textContent = input.value;
            arr[globalIndex] = input.value;

            editP = null;
    
            submit.textContent = 'Submit';
        }
    
        input.value = '';
    }

});