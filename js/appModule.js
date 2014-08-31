/**
 * Created by Shahnawaz on 8/18/14.
 */

var AppModule = {

    data:{},

    selectedItems:[],
    allItems: {},
    loadItems: function(){

        // load item only if its not already loaded
        if (!AppModule.allItems.hasOwnProperty("a1")){
            var keys = Object.keys(AppModule.data);
            keys.forEach(function(key,index){
                AppModule.data[key].forEach(function(item,index){
                    AppModule.allItems[item.id] = item;
                })
            });
        }

    },

    tabChange : function(id){
        // first remove the previous tab 'nav-active' class
        var previousTab = document.querySelectorAll('li.nav-active');
        if(previousTab.length>0){
            previousTab[0].className = "nav-tab";
        }
        // now add 'nav-active' class to the clicked tab
        var tabClick = document.getElementById(id);
        tabClick.className += " nav-active";

        this.makeHTML(id);
    },

    makeHTML : function(id){
        var mainBody = document.getElementById("main-body");
        mainBody.innerHTML = "";
        var dataToAdd;
        switch (id){
            case "nav-appliances":
                dataToAdd = AppModule.data.appliances;
                break;
            case "nav-cell-phones":
                dataToAdd = AppModule.data.cellPhones;
                break;
            case "nav-cameras":
                dataToAdd = AppModule.data.cameras;
                break;
            case "nav-video-games":
                dataToAdd = AppModule.data.videoGames;
                break;
            case "nav-wearable-tech":
                dataToAdd = AppModule.data.wearableTech;
                break;
        }
        dataToAdd.forEach(function(item){
            mainBody.innerHTML += "<div class='img' id="+item.id+" onclick='AppModule.addOrRemoveItem(this.id)'>" +
                "<img src="+ item.imgUrl +" alt="+ item.name +" width='100' height='100'/>" +
                "<div class='desc'>"+ item.name + "</div>" +
                "</div>";

            if(AppModule.selectedItems.indexOf(item.id)!=-1){
                document.getElementById(item.id).className+=" item-selected";
            }
        });
    },

    addOrRemoveItem : function(itemId){
        var itemClicked = document.getElementById(itemId);
        var index;
        if(AppModule.selectedItems.indexOf(itemId)>=0){
            //remove
            index = AppModule.selectedItems.indexOf(itemId);
            AppModule.selectedItems.splice(index,1);
            itemClicked.className = "img";
        }
        else{
            //add
            AppModule.selectedItems.push(itemId);
            itemClicked.className += " item-selected"
        }
        this.updateCart("cart-items",index);
        this.updatePrice("cart-price");
        //console.log(AppModule.selectedItems);
    },

    insertAnItem: function(item,table){
        var newrow = table.insertRow(table.rows.length);
        newrow.insertCell(0).innerHTML = item.name;
        newrow.insertCell(0).innerHTML = "Rs." ;
        newrow.insertCell(0).innerHTML = item.price;
    },

    updateCart : function(itemCartId,index){
        AppModule.loadItems();
        //var selectedItemsHtml = "";
        /*for(obj in AppModule.data){
	     AppModule.data[obj].forEach(function(item){
	     AppModule.selectedItems.forEach(function(id){
	     if(item.id == id){
	     selectedItemsHtml += "<li class='cartItems'>"+item.name+ "<span style='float:right'>- Rs ";
	     switch(true){
	     case (item.price < 10):
	     selectedItemsHtml += " &nbsp &nbsp";
	     break;

	     case (item.price < 100):
	     selectedItemsHtml += " &nbsp";
	     break;
	     }

	     selectedItemsHtml += item.price + "</span></li>";
	     }
	     })
	     })
	     }*/

        var table = document.getElementById("cart-items-table");
        if (index == undefined){
            var selectedItem = AppModule.allItems[AppModule.selectedItems[AppModule.selectedItems.length-1]];
            console.log(selectedItem);
            var newRow = table.insertRow(table.rows.length);
            newRow.width = "100%";
            newRow.setAttribute("data-item",selectedItem.id);
            var data = [selectedItem.name,"Rs",selectedItem.price];
            for( var cell= 0 ; cell <3; cell++){
                var tempCell = newRow.insertCell(cell);
                tempCell.innerHTML = data[cell];
                if(cell === 0){
                    tempCell.className += " name-column"
                } else  if (cell === 2){
                    tempCell.className += " price-column"
                }

            }
        } else {
            table.deleteRow(index);
        }
    },

    updatePrice : function(priceCartId){
        var totalPrice = 0;
        for(obj in AppModule.data){
            AppModule.data[obj].forEach(function(item){
                AppModule.selectedItems.forEach(function(id){
                    if(item.id == id){
                        totalPrice += item.price;
                    }
                })
            })
        }

        var cart = document.getElementById(priceCartId);
        cart.innerHTML = "<h3>Your Cart!</h3><strong>total items:</strong> "+this.selectedItems.length+"<br><strong>total price:</strong> "+totalPrice;
    }

};