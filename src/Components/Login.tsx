import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const Login = () => {
        // validation

        const {
            register,
            control,
            trigger,
            handleSubmit,
            formState:{errors, isValid, isSubmitting}
        } = useForm();
        // to prevent easy routing to the home page
        useEffect(()=>{
            sessionStorage.clear();
        }, []);
        // for re-routing
        const navigate = useNavigate();
        // handling login functionality
        const onSubmit= async(data:any, e:any)=> {
            e.preventDefault();
            // obtain username and password from data object
            const {username, password} = data;
            // console.log(data);
            // fetch user data from the JSON server API
            const response = await fetch ("http://localhost:8000/users");

            const users = await response.json();

            // Find the user with the matching username
            const user = users.find((user: { id: any; })=>
                user.id === username);

                if (user && user.password === password) {
                    toast.success("Login successful");
                    sessionStorage.setItem('username', username);
                    navigate('/');

                }else {
                    toast.error("User not found");
                }
            
        }
    
    const inputStyles =`mb-5 w-full bg-transparent border border-gray-300 border-1 px-5 py-3 
        placeholder:text-gray-20 placeholder:font-sm text-black`
        return (
            <section>
                 <div className='flex items-center justify-center bg-primary-20 h-screen w-full'>
                    <div className='border px-6 py-9 rounded-sm border-gray-100 mx-auto w-5/6 sm:w-[50%] md:w-[30%] bg-white main'>
                        <h1 className='font-montserrat text-primary-100 text-2xl font-semibold text-center '>MEMBER LOGIN</h1>
                        <form className='mt-6' onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className={inputStyles}
                                type="text"
                                placeholder='Enter Username'
                                autoComplete='off'
                                {...register("username", {
                                    required: true,
                                }
                                )}
                                onKeyUp={()=>{trigger("username")}}
                            />
                            {/* for error */}
                            {
                                errors.username && (
                                    <p className='mb-4 font-poppins text-xs text-red-600'>
                                        {errors.username.type === "required" && "Username is required."}
                                    </p>
                                )
                            }
                            <input
                                className={inputStyles}
                                type='password'
                                placeholder='Enter Password'
                                {...register("password", {
                                    required: true,
                                }
                                )}
                                onKeyUp={()=>{trigger("password")}}
                             />
                             {/* for error */}
                             {
                                errors.password && (
                                    <p className='mb-4 text-xs font-poppins text-red-600'>
                                        {errors.password.type === "required" && "Paaword is required."}
                                    </p>
                                )
                            }

                            <Controller
                            name="button"
                            control={control}
                            render={({field}) => (
                                <button {...field} disabled={!isValid || isSubmitting} className='disabled:bg-primary-20 disabled:opacity-40 bg-primary-20 w-full font-poppins p-3 rounded-sm mt-6 text-[#FFFFFF] font-semibold'>LOGIN</button> 
                           )
                          }
                            />
                            <hr className='mt-10 mb-5'></hr>
                            <p className='text-xs font font-montserrat'>New User? <Link to={'/signup'} className='text-blue-500'>sign up</Link></p>
                        </form>
                    </div>
                </div>
            </section>
          )
        }

export default Login