import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList"


export const UserPage = ({
    users,
    userSelected,
    initialUserForm,
    vivsibleForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handlerCloseForm
}) => {

    return (<>
        {!vivsibleForm ||
            <UserModalForm
                handlerAddUser={handlerAddUser}
                userSelected={userSelected}
                initialUserForm={initialUserForm}
                handlerCloseForm={handlerCloseForm}
            />
        }
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">
                <div className="col">
                    {vivsibleForm ||
                        <button
                            className="btn btn-primary my-2"
                            type="button"
                            onClick={handlerOpenForm}
                        >
                            Nuevo Usuario
                        </button>
                    }

                    {users.length === 0 ?
                        <div className="alert alert-warning">No hay usuarios en el sistema!</div>
                        :
                        <UsersList
                            users={users}
                            handlerRemoveUser={handlerRemoveUser}
                            handlerUserSelectedForm={handlerUserSelectedForm}
                        />}

                </div>
            </div>
        </div>
    </>)

}