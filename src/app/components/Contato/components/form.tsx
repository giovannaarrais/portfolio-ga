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

const formSchema = z.object({
    nome: z.string().max(200),
    email: z.email("Email inválido"),
    mensagem: z.string().max(700),
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

    async function onSubmit(values: FormValues) {}

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
                                        {...field}
                                        id="form-rhf-textarea-about"
                                        placeholder="Digite sua mensagem: "
                                        className="min-h-[120px]"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="bg-gradient-primary block w-[300px] text-black m-auto mt-4">
                        Enviar mensagem
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default FormContato;
