$("document").ready(function () {
    let TaskCounter;
    let groupCol = 2;
    let dataTable = $('#table').DataTable({
        order: [[groupCol, 'asc']],
        drawCallback: function ( settings ) {
            let api = this.api();
            let rows = api.rows().nodes();
            let last=null;
            let totalSum = null;
            let totalDataLength = api.rows().nodes().length;

            api.column(groupCol).data().each( function ( group, i ) {
                let curretMembers = parseInt(api.column(3).data()[i]);
                totalDataLength--;

                if (last !== group && totalSum === null) {
                    $(rows).eq(i).before(
                        '<tr class="group groupCol"><td colspan="5">'+group+'</td></tr>'
                    );
                    last = group;
                    totalSum = curretMembers;
                }

                else if (last !== group) {
                    $(rows).eq(i).before(
                        '<tr class="group groupCol"><td colspan="5"> Total Persons: '+totalSum+'</td></tr>'
                    );
                    $(rows).eq(i).before(
                        '<tr class="group groupCol"><td colspan="5">'+group+'</td></tr>'
                    );
                    last = group;
                    totalSum = curretMembers;
                }
                
                else{
                    totalSum += curretMembers;
                }

                if(totalDataLength == 0){
                    $(rows).eq(i).after(
                        '<tr class="group groupCol"><td colspan="5"> Total Persons: '+totalSum+'</td></tr>'
                    );
                }
            } );
        }
    });

    if(localStorage.getItem('TaskCounter'))
    {
        TaskCounter = parseInt(localStorage.getItem('TaskCounter'));
    }
    else{
        localStorage.setItem('TaskCounter',"0");
        TaskCounter = 0;
    }

    function creatRow(element)
    {
        let row = [element.Id,element.Name,element.City,element.Mobile];
        row.push(`<td class="data">
            <button class='removeTask'>Delete</button>
            <button class='editTask'>Edit</button>
        </td>`);
        return row;
    }

    function loadFromLocal(){
        let taskData = JSON.parse(localStorage.getItem('TaskData'));
        if(taskData)
        {
            taskData.forEach((element) => {
                dataTable.row.add(creatRow(element)); 
            });
        }
        else{
            dataTable.clear();
        }
        dataTable.draw();
    }

    function addToLocal(localObj){
        let taskData = JSON.parse(localStorage.getItem('TaskData'));
        if(taskData == null)
        {
            taskData = [];
        }
        else{
            taskData = JSON.parse(localStorage.getItem('TaskData'));
        }
        taskData.push(localObj)
        localStorage.setItem('TaskData',JSON.stringify(taskData));
        TaskCounter++;
        localStorage.setItem('TaskCounter',TaskCounter);
        return true;
    }
    
    function updateToLocal(localObj){
        let taskData = JSON.parse(localStorage.getItem('TaskData'));
        taskData.forEach((element,index) => {
            if(element.Id == localObj.Id)
            {
                taskData[index].Name = localObj.Name;
                taskData[index].City = localObj.City;
                taskData[index].Mobile = localObj.Mobile;
            }
        });
        localStorage.setItem('TaskData',JSON.stringify(taskData));
        return true;
    }

    function removeFromLocal(removalId){
        let taskData = JSON.parse(localStorage.getItem('TaskData'));
        if(taskData && taskData.length == 1)
        {
            localStorage.removeItem('TaskData');
            return true;
        }
        else{
            taskData.forEach((element,index) => {
                if(element.Id == removalId)
                {
                    taskData.splice(index,1);
                }
            });
            localStorage.setItem('TaskData',JSON.stringify(taskData));
            return true;
        }
    }

    $('#table > #tableBody').on('click','.removeTask',function (){
        if(removeFromLocal($(this).parent().parent().children()[0].innerHTML))
        {
            dataTable.row($(this).parents('tr')).remove().draw('page');
        }
        else{
            alert('Technical error, please try again!!');
        }
    });

    $('#table > #tableBody').on('click','.editTask',function (){
        let rowIndex = dataTable.cell($(this).parent()[0]).index().row;
        dataTable.cell(rowIndex, 1).data(`<input type="text" name="name" value= "${dataTable.cell(rowIndex, 1).data()}">`);
        dataTable.cell(rowIndex, 2).data(`<input type="text" name="city" value= "${dataTable.cell(rowIndex, 2).data()}">`);
        dataTable.cell(rowIndex, 3).data(`<input type="text" name="number" value= "${dataTable.cell(rowIndex, 3).data()}">`);
        dataTable.cell(rowIndex, 4).data(`
            <button class="updateTask">Update</button>
            <button class='cancelTask'>Cancel</button> 
        `);
    });

    $('#table > #tableBody').on('click','.updateTask',function (){
        let rowIndex = dataTable.cell($(this).parent()[0]).index().row;
        let localObj = {
            Id: parseInt(dataTable.cell(rowIndex, 0).data()),
            Name: $('#tableBody input[name=name]').val(),
            City: $('#tableBody input[name=city]').val(),
            Mobile: $('#tableBody input[name=number]').val()
        }

        if(updateToLocal(localObj))
        {
            dataTable.cell(rowIndex, 1).data(`${localObj.Name}`);
            dataTable.cell(rowIndex, 2).data(`${localObj.City}`);
            dataTable.cell(rowIndex, 3).data(`${localObj.Mobile}`);
            dataTable.cell(rowIndex, 4).data(`
                <button class='removeTask'>Delete</button>
                <button class='editTask'>Edit</button> 
            `);
            dataTable.draw();
        }
        else{
            alert('Technical error, please try again!!');
        }
    });

    $('#table > #tableBody').on('click','.cancelTask',function (){
        dataTable.clear();
        loadFromLocal();
    });

    $('#inputSec > .submitDiv > #addTask').click(()=>{
        let name = $('#inputSec > .inputDiv > input[name=name]');
        let city = $('#inputSec > .inputDiv > input[name=city]');
        let number = $('#inputSec > .inputDiv > input[name=number]');

        if(name.val()===undefined || name.val().trim()==="" || city.val()===undefined || city.val().trim()==="" || number.val()===undefined || number.val().trim()==="")
        {
            alert("Entered a valid details!!");
            return;
        }
        
        let localObj = {
            Id: TaskCounter+1,
            Name: name.val().trim(),
            City: city.val().trim(),
            Mobile: number.val().trim(),
        };

        if(addToLocal(localObj))
        {
            dataTable.row.add(creatRow(localObj)).draw();
            name.val('');
            city.val('');
            number.val('');           
        }
        else{
            alert('Technical error, please try again!!');
        }
            
    });

    $('#displaySec > #groupBy').on('click','#gpByName',function (){
        groupCol = 1;
        dataTable.order([groupCol, 'asc']);
        dataTable.draw();
    });

    $('#displaySec > #groupBy').on('click','#gpByCity',function (){
        groupCol = 2;
        dataTable.order([groupCol, 'asc']);
        dataTable.draw();
    });

    $('#displaySec > #groupBy').on('click','#gpByMobile',function (){
        groupCol = 3;
        dataTable.order([groupCol, 'asc']);
        dataTable.draw();
    });

    loadFromLocal();
});