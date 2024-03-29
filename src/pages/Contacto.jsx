import React from 'react'
import SeccionConteiner from '../components/SeccionConteiner'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Input, InputGroup, InputLeftElement, Textarea, useToast } from '@chakra-ui/react'
import { AtSignIcon, QuestionIcon } from '@chakra-ui/icons'
import WhatsAppIcon from '../icono/WhatsAppIcon'
import MiEmailIcon from '../icono/MiEmailIcon'
import emailjs from '@emailjs/browser';


const schema = yup
    .object({
        tema: yup.string().required(),
        email: yup.string().email(),
    })
    .required()

const Contacto = () => {

    const toast = useToast()
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), })

    const onSubmit = (data) => {

        const results = emailjs.send('service_511vx2e', 'template_jiyczbt', data, { publicKey: 'bVFjtqS0Rjwa5ZOxs', });
     
        toast.promise(results, {
            success: { title: 'Mensaje enviado', description: 'Looks great' , position: 'bottom-right'},
            error: { title: 'Promise rejected', description: 'Something wrong', position: 'bottom-right' },
            loading: { title: 'Enviando mensaje', description: 'Please wait' ,position: 'bottom-right' },
        })
    }


    return (
        <>
            <SeccionConteiner id={'con'} className={'w-full '}>
                {/* Titulo */}
                <div className='text-silver-950 dark:text-silver-100 tracking-[1px] relative z-20 '>
                    <h2 className='text-[2rem] md:text-[2.5rem] font-bold bg-clip-text xl:dark:text-transparent bg-gradient-to-bl from-silver-100 to-silver-400 font-poppins' >Contacto</h2>
                </div>
                <div className='grid sm:grid-cols-2 gap-2 mt-4'>
                    <div className='border-solid border-shark-700 border-[1px] p-2 z-20 rounded-lg '>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4' >
                            <div>
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none'>
                                        <QuestionIcon color='#363636' />
                                    </InputLeftElement>
                                    <Input type='tel' bg='#f7f7f7' placeholder='Motivo' {...register("tema")} />
                                </InputGroup>
                                <p className='text-red-800 dark:text-red-300 px-1'>{errors.tema?.message}</p>
                            </div>

                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <AtSignIcon color='#363636' />
                                </InputLeftElement>
                                <Input type='tel' bg='#f7f7f7' placeholder='qwerty@qw.v' {...register("email")} />
                            </InputGroup>

                            <Textarea placeholder='Escribe el mesaje' bg='#f7f7f7' {...register("descripcion")} />

                            <input type="submit" className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md  bg-[linear-gradient(110deg,#323c48,45%,#637b94,55%,#323c48)] bg-[length:200%_100%] px-6 font-medium text-silver-50 tracking-[1.5px] transition-colors " />

                        </form>
                    </div>
                    <div className='border-solid border-shark-700 border-[1px] p-2 z-20 rounded-lg flex justify-evenly'>
                        <WhatsAppIcon />
                        <MiEmailIcon />
                    </div>
                </div>

            </SeccionConteiner>
        </>
    )
}

export default Contacto
