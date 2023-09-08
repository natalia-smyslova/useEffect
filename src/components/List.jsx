// function List({users}){

//     console.log(users);
    
//     return(
//         <nav className="nav">
//             <ul className="list">
//                 {/* {users.map((user, index) => <li className="item" key={index}>{user.name}</li>)} */}
//             </ul>
//         </nav>
//     )
// }

// export default List


export default function List({ list, showDetails }) {
    return (
      <nav className="nav">
        <ul className="list">
          {list.map(i => <li className="item" key={i.id} onClick={() => showDetails(i.id)}>{i.name}</li>)}
        </ul>
      </nav>
    );
  }