import React, {useState} from 'react';

const Tabs = (props) => {

    // const [formTabs, setFormTabs] = useState({
    //     name:""
    // })


    const [activeTab, setActiveTab] = useState(0)

    const handleClick=(e)=>{
        setActiveTab(parseInt(e.target.getAttribute("data-key")))
    }

    return (
        <div>
            <div>
                <button data-key={0} onClick={(e)=>handleClick(e)} className="form-control" type="submit" name="name" placeholder="Tab 1">Tab 1</button>
                <button data-key={1} onClick={(e)=>handleClick(e)} className="form-control" type="submit" name="name" placeholder="">Tab 2</button>
                <button data-key={2} onClick={(e)=>handleClick(e)} className="form-control" type="submit" name="name" placeholder="">Tab 3</button>
            </div>
            <br></br>
            
                
            <div>
                <textarea className="" rows="5" cols="65" type="text" name="name" placeholder="" value={props.content[activeTab]} />
            </div>
        </div>
    )
};

export default Tabs;