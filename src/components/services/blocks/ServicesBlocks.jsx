import React from "react";
import data from "../../../Services.json";
import { Footnote, HeadlineBody, Subheadline1 } from "../../../textStyles/TextStyleComponents";
import ServicesList from "../list/ServicesList";
import cl from "./ServicesBlocks.module.css";
import clForLastChild from "../list/ServicesList.module.css";

const ServicesBlocks = () => {
    // ЗАГРУЗКА ДАННЫХ С JSON С СЕРВЕРА
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //   
    //   fetch('path/to/your/json/file.json')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    //     .catch(error => console.error('Error fetching data:', error));
    // }, []);
    
    

    return (
        <div>
            {data.map(block => (
                <div key={block.category} className={cl.block}>
                    <Footnote className={cl.blockName}>{block.category}</Footnote>

                    <div className={cl.list}>
                        {block.items.map(elem => (
                            <div key={elem.id} className={clForLastChild.containerForLastChild}>

                                <ServicesList
                                    services={{
                                        id: elem.id,
                                        name: elem.name,
                                        price: elem.price,
                                        time: elem.time,
                                        info: elem.info
                                    }}    
                                />

                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ServicesBlocks;