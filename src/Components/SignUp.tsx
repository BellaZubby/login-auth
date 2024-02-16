import {useForm, Controller} from 'react-hook-form';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';




const SignUp = () => {

    const {
        register,
        control,
        trigger,
        reset,
        handleSubmit,
        watch,
        formState:{errors, isValid, isSubmitting}
    } = useForm()

    const navigate = useNavigate();

    const onSubmit = async (data:any, e:any) => {
        // NB trigger comes from the useFrom hook above.
             e.preventDefault();
            //  console.log(data);
            fetch("http://localhost:8000/users", {
                method: "POST",
                headers: {"content-type":"application/json"},
                body: JSON.stringify(data)
            }).then((_response)=>{
                toast.success('Registration was successful');
                navigate('/login');
            }).catch((_error)=>{
                toast.error('Failed registration')
            });
             reset;
    }
    // for confirm password

    const password = watch('password');

    const inputStyles =`mb-5 w-full bg-transparent border border-1 px-5 py-3 
    placeholder:text-gray-20 border-gray-300 placeholder:font-sm text-black`
  return (
    <div>
        <div className='flex items-center justify-center bg-slate-100 h-auto w-full'>
            <div className='my-16 border px-6 py-9 rounded-sm border-gray-100 w-5/6 mx-auto sm:w-[50%] md:w-[30%] main'>
                <h1 className='font-montserrat text-primary-100 text-2xl font-semibold text-center '>CREATE ACCOUNT</h1>
                <form 
                    className='mt-6'
                    onSubmit={handleSubmit(onSubmit)}

                >
                    <input
                        className={inputStyles}
                        type='text'
                        placeholder='Username'
                        autoComplete='off'
                        {...register("id", {
                            required: true,
                            minLength:4,
                            maxLength: 40
                        }
                        )}
                        onKeyUp={()=>{trigger("id")}}
                    />
                    {/* error msg for first name */}
                    {
                        errors.id && (
                            <p className='mb-4 font-poppins text-xs text-red-600'>
                                {errors.id.type === "required" && "This field is required."}
                                {errors.id.type === "minLength" && "minimum length is 4 character."}
                                {errors.id.type === "maxLength" && "maximum length is 40 character."}
                            </p>
                        )
                    }
                    <input
                        className={inputStyles}
                        type='text'
                        autoComplete='off'
                        placeholder='Full Name'
                        {...register("fullName", {
                            required: true,
                            minLength: 4,
                            maxLength: 100
                        }
                        )}
                        onKeyUp={()=>{trigger("fullName")}}
                    />
                    {/* error msg for last name */}

                    {
                        errors.fullName && (
                            <p className='mb-4 font-poppins text-xs text-red-600'>
                                {errors.fullName.type === "required" && "This field is required."}
                                {errors.fullName.type === "minLength" && "minimum length is 4 character."}
                                {errors.fullName.type === "maxLength" && "maximum length is 100 character."}
                            </p>
                        )
                    }

                    <input
                        className={inputStyles}
                        type="text"
                        autoComplete='off'
                        placeholder='Enter Email'
                        {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        }
                        )}

                        onKeyUp={()=>{trigger("email")}}
                    />
                    {/* error msg for email */}
                    {
                        errors.email && (
                            <p className='mb-4 font-poppins text-xs text-red-600'>
                                {errors.email.type === "required" && "This field is required."}
                                {errors.email.type === "pattern" && "Invalid email address!"}
                            </p>
                        )
                    }
                    <input
                        className={inputStyles}
                        type='password'
                        placeholder='Enter Password'
                        {...register("password", {
                            required: true,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*^/?&])[A-Za-z0-9@$!%*^/?&]{8,15}$/i,
                            minLength: 8,
                            maxLength: 15
                        }
                        )}
                        onKeyUp={()=>{trigger("password")}}
                    />
                    {/* error msg for password */}

                    {
                        errors.password && (
                            <p className='mb-4 text-xs font-poppins text-red-600'>
                                {errors.password.type === "required" && "This field is required."}
                                {errors.password.type === "pattern" && "Password must contain atleast one uppercase letter, lowercase letter, a number and a special character e.g @ % / * _"}
                                {errors.password.type === "minLength" && "password must be up to 8 characters" }
                                {errors.password.type === "maxLength" && "password must not exceed 15 characters"}
                            </p>
                        )
                    }

                    <input
                        className={inputStyles}
                        type='password'
                        placeholder='Confirm Password'
                        {...register("confirmPassword", {
                            required: true,
                            validate: (value) => value === password || "Passwords do not match"
                        }
                        )}
                        onKeyUp={()=>{trigger("confirmPassword")}}
                    />
                    {/* error msg for password */}

                    {
                        errors.confirmPassword && (
                            <p className='mb-4 text-xs font-poppins text-red-600'>
                                {errors.confirmPassword.type === "required" && "This field is required."}
                                {errors.confirmPassword.type === "validate" && "Passwords do not match!"}
                            </p>
                        )
                    }
                    <div className='flex items-center justify-center gap-1'>
                        <input
                            type='checkbox'
                            {...register("checkbox", {
                                required: true})}
                        />
                        <p className='font-montserrat text-[10px] sm:text-xs'>I agree to all <a href='' className='text-blue-500'>Terms of Use</a> and <a href='' className='text-blue-500'>Privacy Statement</a></p>
                    </div>
                    {
                        errors.checkbox && (
                            <p className='mt-3 text-xs font-poppins text-red-600'>
                                {errors.checkbox.type === "required" && "required"}
                               
                            </p>
                        )
                    }
                    {/* for my button */}
                    <Controller
                        name="button"
                        control={control}
                        render={({field}) => (
                            <button {...field} disabled={!isValid || isSubmitting} className='disabled:bg-primary-20 disabled:opacity-40 bg-primary-20 w-full font-poppins p-3 rounded-sm mt-6 text-[#FFFFFF] font-semibold'>CREATE ACCOUNT</button> 
                        )
                    }
                    
                    />
                    {/* <button className='bg-primary-20 w-full font-poppins p-3 rounded-sm mt-6 text-[#FFFFFF] font-semibold'>CREATE ACCOUNT</button> */}
                    <hr className='my-7'></hr>
                    <p className='text-xs font-montserrat'>Already have an account? <Link to={'/login'} className='text-blue-500'>Log in</Link></p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp

