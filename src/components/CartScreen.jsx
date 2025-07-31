import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from 'primereact/card';
        

const CartScreen = () => {

    const allItems = useSelector((state) => state.cartItems.itemData);
    console.log(allItems);
    let total = 0;
    for(let i=0; i<allItems.length; i++)
    {
        total += allItems[i].price * allItems[i].count;
    }

  return (
    <>
      {
        allItems.map((item)=>
        {
            return(
                <div>
                    <Card title={item.name}>
                        <div className="flex">
                        <div className="flex-1 flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">
                            count: {item.count}
                        </div>
                        <div className="flex-1 flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">
                            Price: {item.price}
                        </div>
                        <div className="flex-1 flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">
                            Total: {item.price * item.count}
                        </div>
                        <div className="flex-1 flex align-items-center justify-content-center bg-primary font-bold m-2 px-4 py-2 border-round">
                            <img style={{height: "40px", width: "40px"}} src={item.image}/>
                        </div>
                        </div>
                    </Card>
                   
                </div>
            )
        })
        
    }
    <Card className="flex">
            <h1 className="flex justify-content-right">CartTotal: {total}</h1>
    </Card>
    </>
)
}      
export default CartScreen;
