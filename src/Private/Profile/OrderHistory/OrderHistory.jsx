import React from 'react';
import TestProfileData from '../../../TestProfileData';
import ListView from '../../../Public/Products/ListView';

function OrderHistory() {
    return (
        <>
            {
                TestProfileData.orderHistory.map(item => {
                    return (<>
                        <ListView
                            ProductImageURL={item.ProductImageURL}
                            ProductTitle={item.ProductTitle}
                            ProductPrice={item.ProductPrice}
                            Status={item.Status}
                        >

                        </ListView>
                    </>)
                })
            }
        </>
    )
}

export default OrderHistory