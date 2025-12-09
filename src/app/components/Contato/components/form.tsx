"use client"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const formSchema = z.object({
    nome: z.string().max(200),
    email: z.email("Email inválido"),
    mensagem: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

const FormContato = () => {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nome: "",
            email: "",
            mensagem: "",
        },
    });

    async function onSubmit(values: FormValues) {
        try {
            const response = await fetch('/api/contact', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            })

            if(!response.ok){
                toast.error("Erro ao enviar email")
                return
            }

            console.log('response', response)
            console.log('values', values)
            toast.success("Email enviado com sucesso!")
            form.reset()

        } catch(error){
            console.log(error)
            toast.error("Falha ao enviar email")

        }

    }

    return (
        <div className="mt-5">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
                    <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel />
                                <FormControl>
                                    <Input
                                        placeholder="Digite seu nome: "
                                        required
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel />
                                <FormControl>
                                    <Input
                                        placeholder="Digite seu email: "
                                        required
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="mensagem"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel />
                                <FormControl>
                                    <Textarea
                                        className="min-h-[120px] max-h-[200px]"
                                        placeholder="Digite sua mensagem: "
                                        required
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="bg-gradient-primary block sm:w-[300px] w-full text-black m-auto mt-4">
                        Enviar mensagem
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default FormContato;
