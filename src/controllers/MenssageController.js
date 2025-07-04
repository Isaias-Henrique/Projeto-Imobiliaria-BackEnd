import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
    async createMessage(request, response) {
        const {cliente_nome, cliente_email, cliente_mensagem, userId} = request.body;

        try {
            let mensagem = await prisma.mensagens.findFirst({ where: { cliente_email } });

            if (mensagem) {
                return response.json({
                    error: true,
                    message: "Parece que você já enviou uma mensagem para este anunciante, aguarde o retorno!"
                });
            }

            mensagem = await prisma.mensagens.create({
                data: {
                    cliente_nome, 
                    cliente_email, 
                    cliente_mensagem, 
                    userId
                }
            });

            return response.json({
                error: false,
                message: "Sua mensagem foi enviada com sucesso. Agora é só aguardar!",
                mensagem
            });

        } catch (error) {
            return response.json({ message: error.message})
        }
    },
    async findMessage(request, response) {
        try {
            const { id } = request.params;
            
            const mensagem = await prisma.mensagens.findMany({
                where: { userId : Number(id) }
            });

            return response.json({
                mensagem
            });
        } catch (error) {
            return response.json({ message: error.message})
        }
    }

}
