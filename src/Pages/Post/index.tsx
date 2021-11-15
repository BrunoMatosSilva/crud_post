import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Header from '../../components/Header';
import { ContainerHeader, ContainerMain } from './styles';
import ButtonReturn from '../../components/ButtonReturn';

interface IFormData {
    title: String;
    description: String;
    content: String;
}

const schema = yup.object().shape({
    title: yup.string().required("O título é obrigatorio"),
    description: yup.string().required("A descrição é obrigatorio"),
    content: yup.string().required("O conteudo da mensagem é obrigatorio"),
});

export function Post() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const addPost: SubmitHandler<IFormData> = data => console.log(data);

    return (
        <>
            <ContainerHeader>
                <Header />

                <ButtonReturn />
            </ContainerHeader>

            <ContainerMain>

                <div className="card-post">
                    <h1>Criar Postagem</h1>
                    <div className="line-post"></div>

                    <div className="card-body-post">

                        <form onSubmit={handleSubmit(addPost)}>
                            <div className="fields">
                                <label>Título</label>
                                <input type="text" {...register("title")} />
                                <p className="error-message">{errors.title?.message}</p>
                            </div>

                            <div className="fields">
                                <label>Descrição</label>
                                <input type="text" {...register("description")} />
                                <p className="error-message">{errors.description?.message}</p>
                            </div>

                            <div className="fields">
                                <label>Conteudo</label>
                                <textarea {...register("content")}></textarea>
                                <p className="error-message">{errors.content?.message}</p>
                            </div>

                            <div className="btn-post">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>

            </ContainerMain>
        </>
    )
}