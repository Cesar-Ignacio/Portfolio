import React from 'react'
import SeccionConteiner from '../components/SeccionConteiner'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Input, InputGroup, InputLeftElement, Textarea, useToast } from '@chakra-ui/react'
import { AtSignIcon, QuestionIcon } from '@chakra-ui/icons'
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next'

const schema = yup
    .object({
        subject: yup.string().required(),
        email: yup.string().email(),
    })
    .required()

const Contacto = () => {

    const toast = useToast()
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), })
    const onSubmit = (data) => {

        const results = emailjs.send('service_511vx2e', 'template_jiyczbt', data, { publicKey: 'bVFjtqS0Rjwa5ZOxs', });

        toast.promise(results, {
            success: { title: 'Mensaje enviado', description: 'Looks great', position: 'bottom-right' },
            error: { title: 'Promise rejected', description: 'Something wrong', position: 'bottom-right' },
            loading: { title: 'Enviando mensaje', description: 'Please wait', position: 'bottom-right' },
        })
    }

    const [t] = useTranslation('global');


    return (
        <>
            <SeccionConteiner id={'con'} className={'w-full scroll-mt-[5rem] '}>
                {/* Titulo */}
                <div className='text-silver-950 dark:text-silver-100 tracking-[1px] relative z-20 '>
                    <h2 className='text-[2rem] md:text-[2.5rem] font-bold bg-clip-text xl:dark:text-transparent bg-gradient-to-bl from-silver-100 to-silver-400 font-poppins' >{t("contact.title")}</h2>
                </div>
                {/* Parrafos y formulario */}
                <div className='grid sm:grid-cols-2 gap-4 mt-3'>
                    <div className='text-[1.1rem] z-20 rounded-lg text-silver-950  dark:text-silver-100 flex flex-col gap-7'>
                        <p>{t("contact.descriptionOne")}</p>
                        <p>{t("contact.descriptionTwo")}</p>
                    </div>
                    {/* Formulario */}
                    <div className=' bg-silver-200 dark:bg-firefly-950 border-solid border-firefly-200 border-[2px] p-2 z-20 rounded-lg shadow-[0px_0px_15px] shadow-firefly-500 transition-colors ease-linear duration-300'>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4  drop-shadow-xl' >
                            <div>
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none'>
                                        <QuestionIcon color='#363636' />
                                    </InputLeftElement>
                                    <Input type='text' bg='#f7f7f7' placeholder='subject' {...register("subject")} />
                                </InputGroup>
                                <p className='text-red-800 dark:text-red-300 px-1'>{errors.subject?.message}</p>
                            </div>

                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <AtSignIcon color='#363636' />
                                </InputLeftElement>
                                <Input type='text' bg='#f7f7f7' placeholder='arquimedes@eureka.com' {...register("email")} />
                            </InputGroup>

                            <Textarea placeholder='write the message' bg='#f7f7f7' {...register("descripcion")} />

                            <input type="submit" className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md  bg-[linear-gradient(110deg,#323c48,45%,#637b94,55%,#323c48)] bg-[length:200%_100%] px-6 font-medium text-silver-50 tracking-[1.5px] transition-colors " />

                        </form>
                    </div>
                </div>
            </SeccionConteiner>
        </>
    )
}

export default Contacto
