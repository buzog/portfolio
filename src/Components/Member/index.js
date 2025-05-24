export default function Member(props) {
    return (
        <div className="">
            <div className="cardHeader">
                <MemberPhoto />
            </div>
            <div className="cardBody">
                <h3>{props.name}</h3>
                <p>{props.info}</p>
                <MemberSkills />
                <hr />
                <p>{props.description}</p>
            </div>
        </div>
    );
}

function MemberPhoto() {
    
}

function MemberSkills() {
    
}