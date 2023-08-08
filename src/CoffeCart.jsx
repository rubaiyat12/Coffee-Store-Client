import Swal from "sweetalert2";


const CoffeCart = ({ coffee }) => {
    const {_id, photo, name, quantity, supplier, taste, category, details } = coffee;
    
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                // )

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                        }
                     })
            }
        })
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt=" movie" /></figure>
            <div className="flex w-full justify-between pr-4">
                
                <div>
                    <h2 className="card-title">Name:{name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                    <p>{category}</p>
                    
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-2">
                        <button className="btn">View</button>
                        <button className="btn">Edit</button>
                        <button onClick={()=>handleDelete(_id)}
                            className="btn bg-orange-500">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeCart;