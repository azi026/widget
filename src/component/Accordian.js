import react,{useState} from 'react';


const Accordian= ({items})=>{     
    
    const onTitleOnClick=(index)=>{
        setActiveIndex(index) ;      
    }
        const [activeIndex,setActiveIndex]=useState(null);
    
        const renderItem=items.map((item,index)=>{
            const active=index===activeIndex ?'active' : ''
        return <react.Fragment key={item.title}> 
         <div 
             onClick={()=>onTitleOnClick(index)}
             className={`title${active}`}>
             <i className="dropdown icon"></i>
             {item.title}
        </div>
            <div className={`content${active}`}>
                <p>{item.content}</p>
            </div>
        </react.Fragment>
    });
        return(
         <div className="ui styled accordion">
            {renderItem}
            <h1>{activeIndex}</h1>
        </div> 
        );     
};
export default Accordian;