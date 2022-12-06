export default function MassFilter ({onChange}){
    return(
        <div className="filter-wrapper mass">
            <select name="height" className="filter-height" onChange={onChange}>
                <option value="0">Select Mass</option>
                <option value="100000">More than 1,00,000 kgs</option>
                <option value="500000">More than 5,00,000 kgs</option>
                <option value="1500000">More than 15,00,000,kgs</option>
            </select>
    
        </div>
    )
    }