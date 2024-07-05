

export default function ViewPerson({person}) {
    return <>
        <div className="display-group">
            <label>First Name</label>
            <span>{person.firstname}</span>
        </div>
        <div className="display-group">
            <label>Last Name</label>
            <span>{person.lastname}</span>
        </div>
        <div className="display-group">
            <label>Age</label>
            <span>{person.age}</span>
        </div>
        <div className="display-group">
            <label>Email</label>
            <span>{person.email ?? "[EMPTY]"}</span>
        </div>
        <div className="display-group">
            <label>Phone Number</label>
            <span>{person.phone ?? "[EMPTY]"}</span>
        </div>
        <div className="button-ribbon-left">
            <button className="danger">Delete</button>
            <button>Edit</button>
        </div>
    </>
}