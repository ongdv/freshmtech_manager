import Constant from '../Constant';

export default {
    //Common start
    //setUser
    //로그인 후 페이지 전환
    [Constant.LOGIN]: (state, payload) => {
        state.user = payload;
        state.currentView = "Layout";
    },

    //sessionOut
    //로그아웃 후 로그인 페이지 전환
    [Constant.LOGOUT]: (state) => {
        state.user = null;
        state.currentView = "Auth";
        state.layoutView = "Main";
    },
    [Constant.ERROR]: (state, payload) => {
        state.currentView = "Error";
        state.err = payload;
    },

    // //직원, 거래처 목록 입력
    // [Constant.FETCH_READY]: (state, payload) => {
    //     state.employee = payload[0];
    //     state.clientList = payload[1];
    //     console.log(state.client);
    //     payload[1].forEach(element => {
    //         state.clientName.push({value: element.id, text: element.bName});
    //     });
    // },

    //setView(total)
    //App.vue에서 사용, 로그인과 레이아웃을 분리하기 위한 변이
    [Constant.CHANGE_PAGE]: (state, payload) => {
        console.log(payload);
        state.layoutView = payload.component;
    },
    //Common end

    //Employee start
    //getEmployee
    [Constant.FETCH_EMPLOYEE]: (state, payload) => {
        console.log(payload);
        state.employeeList = payload;
    },
    //getEmployeeDetail
    [Constant.FETCH_EMPLOYEE_DETAIL]: (state, payload) => {
        console.log(payload);
        state.employee = payload;
        state.layoutView = "EmployeeDetail";
    },
    //searchEmployee
    [Constant.FETCH_EMPLOYEE_SEARCH]: (state, payload) => {
        console.log(payload);
        state.employeeList = state.employeeList.filter(item => {
            return item.name.includes(payload) === true;
        });
    },
    //Employee end

    //Provider start
    //getProvider
    [Constant.FETCH_PROVIDER]: (state, payload) => {
        console.log(payload);
        payload.forEach(item => {
            item.pmProviderItemVOs === null ? item.count = 0 : item.count = item.pmProviderItemVOs.length;
        });
        state.providerList = payload;
    },
    //searchProvider
    [Constant.FETCH_PROVIDER_SEARCH]: (state, payload) => {
        state.providerList = state.providerList.filter(item => {
            return item.bname.includes(payload) === true;
        });
    },
    //getProviderDetail
    [Constant.FETCH_PROVIDER_DETAIL]: (state, payload) => {
        console.log(payload);
        state.provider = payload;
        state.layoutView = "ProviderDetail";
    },

    //Provider end
    //Client start
    // getClient
    [Constant.FETCH_CLIENT]: (state, payload) => {
        console.log(payload);
        payload.forEach(item => {
            var d = new Date(item.regDate);
            item.regDate = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();
            console.log(item.priceRate);
        });
        state.clientList = payload;
        // payload[0].forEach(item=>{
        //     state.delivererList.push({value: item.delivererId, text: item.delivererManager});
        // });
        // state.clientList = payload[1];
        // payload[2].forEach(item=>{
        //     state.salesmanList.push({value: item.sId, text: item.sManager});
        // });
    },
    //searchClient
    [Constant.FETCH_CLIENT_SEARCH]: (state, payload) => {
        console.log(payload);
        state.clientList = state.clientList.filter(item => {
            return item.bName.includes(payload) === true;
        })
    },
    //getClientDetail
    [Constant.FETCH_CLIENT_DETAIL]: (state, payload) => {
        console.log(payload);
        state.client = payload;
        state.layoutView = "ClientDetail";
    },
    //updateClient
    [Constant.UPDATE_CLIENT]: (state, payload) => {
        state.layoutView = "Client";
        state.Client = {};
    },
    //deleteClient
    [Constant.DELETE_CLIENT]: (state, payload) => {
        state.layoutView = "Client";
        state.Client = {};
    },
    [Constant.FETCH_CLIENT_ITEM]: (state, payload) => {
        state.clientItemList = payload;
    },
    //Client end

    //Deliverer start
    //getDeliverer
    [Constant.FETCH_DELIVERER]: (state, payload) => {
        state.delivererList = payload;
    },

    [Constant.FETCH_DELIVERER_SEARCH]: (state, payload) => {
        state.delivererList = state.delivererList.filter(item => {
            return item.bName.includes(payload) === true;
        });
    },

    [Constant.FETCH_DELIVERER_DETAIL]: (state, payload) => {
        console.log(payload);
        state.deliverer = payload;
        state.layoutView = "DelivererDetail";
    },
    //Deliverer end

    //Category start
    //getCategory
    //카테고리 불러오기
    [Constant.FETCH_CATEGORY]: (state, payload) => {
        state.fCategory = payload.first;
        state.sCategory = payload.second;
    },
    //Category end

    //Goods start
    //getGoodsList
    //물품 상태 변이
    [Constant.FETCH_GOODS]: (state, payload) => {
        console.log(payload);
        state.goodsList = payload;
    },

    //getGoods
    //물품 검색 후 물품 상태 변이
    [Constant.FETCH_GOODS_SEARCH]: (state, payload) => {
        console.log(payload);
        state.goodsList = payload.goods;
    },

    //getGoodsDetail
    //물품리스트에서 선택시 물품 상세보기 페이지로 이동
    [Constant.FETCH_GOODS_DETAIL]: (state, payload) => {
        console.log(payload);
        state.goods = payload.itemVO;
        state.layoutView = "GoodsDetail";
    },

    //deleteGoods
    //물품 삭제 후 상세보기에서 사용된 상태 초기화, 레이아웃 전환
    [Constant.DELETE_GOODS]: (state, payload) => {
        console.log(state.goods);
        state.goods = {};
        state.layoutView = "Goods"
    },

    //filterGoods
    [Constant.FILTER_GOODS]: (state, payload) => {
        console.log(payload);
        switch (payload.filter) {
            case 'state':
                console.log("state filter");
                state.goodsList = state.goodsList.filter(item => {
                    return item.state === payload.value;
                })
                console.log(state.goodsList);
                break;
            case 'first':
                console.log("first filter");
                state.goodsList = state.goodsList.filter(item => {
                    return item.first === payload.value;
                })
                break;
            case 'second':
                console.log("second filter");
                state.goodsList = state.goodsList.filter(item => {
                    return item.second === payload.value;
                })
                break;
        }
    },
    //Goods end

    //Purchase start
    //getPurchase
    //매입처 목록 불러오기
    [Constant.FETCH_PURCHASE]: (state, payload) => {
        console.log(payload);
        state.purchaseList = payload;
    },
    //saechPurchase
    //매입처 검색
    [Constant.FETCH_PURCHASE_SEARCH]: (state, payload) => {
        console.log(payload);
        state.purchaseList = payload;
    },
    //getPurchaseDetail
    //매입처 상세보기
    [Constant.FETCH_PURCHASE_DETAIL]: (state, payload) => {
        console.log(payload);
        state.purchase = payload;
        state.layoutView = "PurchaseDetail"
    },
    //Purchase end

    //Order start
    //getOrderList
    //주문 상태 변이
    [Constant.FETCH_ORDER]: (state, payload) => {
        console.log(payload);
        payload.forEach((item) => {
            var d = new Date(item.orderDate);
            item.orderDate = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();
        })
        state.orderList = payload;
    },
    //getOrderDetail
    [Constant.FETCH_ORDER_DETAIL]: (state, payload) => {
        console.log(payload);
        state.order = payload;
        if(state.order.pmOrderItemJoinItemVOs === null){
            state.order.pmOrderItamVOs = Array();
        }else{
            state.order.pmOrderItamVOs = Array();
            state.order.pmOrderItemJoinItemVOs.forEach(item=>{
                console.log(item);
                if(item.tbOrderItemQTY == 0){
                    item.qty = 1; 
                }else{
                    item.qty = item.tbOrderItemQTY;
                    
                    item.id = item.tbOrderItemID;
                    item.tbitem_ID = item.tbItemID;
                    item.itemName = item.tbItemItemName;
                    item.price = item.tbItemPrice3;
                    item.amount = item.price*item.qty;
                    
                    state.order.pmOrderItamVOs.push(item);
                }
            })
        }
        state.layoutView = "OrderDetail";
    },
    //updateOrderListItemQty
    [Constant.UPDATE_ITEM_QTY]: (state, payload) => {
        console.log(Constant.UPDATE_ITEM_QTY);
        console.log(payload);
        state.order.pmOrderItamVOs.forEach(item=>{
	    if(item.id === payload.id){
		if(payload.val === "up"){
			item.qty++
		}else{
			item.qty--
		}
		console.log(item.qty);
	    }
        });
    }
    //Order end
}
