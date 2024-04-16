import DefaultCard from "./Cards/DefaultCard.tsx";
import MinQtyCard from "./Cards/MinQtyCard.tsx";

function Home() {

    return (
        <>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard
                            thumbnail={'https://img.freepik.com/free-photo/portrait-woman-customer-service-worker_144627-37939.jpg?t=st=1712689626~exp=1712693226~hmac=9d9f051a7f45b955002f438f39a184b61536b56ad0684e8e983ce5a77759745d&w=740'}
                            description={'Buyers, Clients, Consumers'}
                            title={'Customers'}
                            value={250}
                            key={1}

                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard
                            thumbnail={'https://img.freepik.com/free-photo/young-man-working-warehouse-with-boxes_1303-16616.jpg?t=st=1712689723~exp=1712693323~hmac=451a18b729aca518a1ba5ce5fa83e1d8c172642c254954769a2a87ed1508d84a&w=740'}
                            description={'Goods, merchandise, offerings.'}
                            title={'Products'}
                            value={250}
                            key={2}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard
                            thumbnail={'https://img.freepik.com/free-photo/black-friday-concept-with-products-shopping-cart_23-2147709351.jpg?t=st=1712689802~exp=1712693402~hmac=7ee17ef528d1e58fdef585b514a68e4c45948fbcefc521e5530351baf93004a3&w=740'}
                            description={'Purchases, requests, transactions'}
                            title={'Orders'}
                            value={250}
                            key={3}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard
                            thumbnail={'https://img.freepik.com/free-photo/person-carrying-lot-cash_53876-146084.jpg?t=st=1712689879~exp=1712693479~hmac=789861b9dd9a10ce847ca9c20e768fbc20d13947a7e501d476a2aac90c399607&w=740'}
                            description={'Revenue, earnings, profit, gains.'}
                            title={'Income'}
                            value={250}
                            key={4}
                        />
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12 col-md-9">
                        <div className="context">

                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                            <MinQtyCard/>
                            <MinQtyCard/>
                            <MinQtyCard/>
                            <MinQtyCard/>
                            <MinQtyCard/>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Home;