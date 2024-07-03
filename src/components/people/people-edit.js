"use client";

export default function PeopleEdit({id}) {
    return <>
    <form>
        <div className="form-group">
            <label>First Name</label>
            <input />
        </div>
        <div className="form-group">
            <label>Last Name</label>
            <input />
        </div>
        <div className="form-group">
            <label>Age</label>
            <input type="number" min="1" max="120" />
        </div>
        <div className="form-group">
            <label>Email</label>
            <input />
        </div>
        <div className="form-group">
            <label>Phone Number</label>
            <input />
        </div>
        <div>
            <button type="submit" className="call-to-action">{
                id === 'new' ? "Create" : "Update"
                }</button>
        </div>
    </form>
    </>
}