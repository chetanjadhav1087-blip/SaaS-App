'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { z } from 'zod'

import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"

import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"
import { subjects } from "@/constants"

const formSchema = z.object({
    name: z.string().min(1, { message: 'Companion is required' }),
    subject: z.string().min(1, { message: 'Subject is required' }),
    topic: z.string().min(1, { message: 'Topic is required' }),
    voice: z.string().min(1, { message: 'Voice is required' }),
    style: z.string().min(1, { message: 'Style is required' }),
    duration: z.number().min(1, { message: 'Duration is required' }),

})

function ComapnionForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            subject: '',
            topic: '',
            voice: '',
            style: '',
            duration: 15,
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Card className="w-full sm:max-w-md">
            <CardHeader>
                <CardTitle>Bug Report</CardTitle>
                <CardDescription>
                    Help us improve by reporting bugs you encounter.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="name"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-title">
                                        Companion Name
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-rhf-demo-title"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter the companion name"
                                        autoComplete="off"
                                        className="input"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="subject"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-title">
                                        Subject
                                    </FieldLabel>
                                    <Select
                                        name={field.name}
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <SelectTrigger
                                            id="form-rhf-select-language"
                                            aria-invalid={fieldState.invalid}
                                            className="input capitalize"
                                        >
                                            <SelectValue placeholder="Select the Subject" />
                                        </SelectTrigger>

                                        <SelectContent position="item-aligned">
                                            {subjects.map((subject) => (
                                                <SelectItem 
                                                    value={subject}
                                                    key={subject}
                                                    className='capitalize'
                                                >
                                                    {subject}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="topic"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-description">
                                        What Should the companion help with?
                                    </FieldLabel>
                                    <InputGroup>
                                        <InputGroupTextarea
                                            {...field}
                                            id="form-rhf-demo-description"
                                            placeholder="Ex. Derivative & Interation"
                                            rows={6}
                                            className="min-h-24 resize-none"
                                            aria-invalid={fieldState.invalid}
                                        />
                                        <InputGroupAddon align="block-end">
                                            <InputGroupText className="tabular-nums">
                                                {field.value.length}/100 characters
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="voice"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-title">
                                        Voice
                                    </FieldLabel>
                                    <Select
                                        name={field.name}
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <SelectTrigger
                                            id="form-rhf-select-language"
                                            aria-invalid={fieldState.invalid}
                                            className="input "
                                        >
                                            <SelectValue placeholder="Select the Voice" />
                                        </SelectTrigger>

                                        <SelectContent position="item-aligned">
                                            
                                                <SelectItem 
                                                    value="male"
                                                >
                                                    Male
                                                </SelectItem>
                                                <SelectItem 
                                                    value="female"
                                                >
                                                    Female
                                                </SelectItem>
                                
                                        </SelectContent>
                                    </Select>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                         <Controller
                            name="style"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-title">
                                        Style
                                    </FieldLabel>
                                    <Select
                                        name={field.name}
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <SelectTrigger
                                            id="form-rhf-select-language"
                                            aria-invalid={fieldState.invalid}
                                            className="input "
                                        >
                                            <SelectValue placeholder="Select the Style" />
                                        </SelectTrigger>

                                        <SelectContent position="item-aligned">
                                            
                                                <SelectItem 
                                                    value="formal"
                                                >
                                                    Formal
                                                </SelectItem>
                                                <SelectItem 
                                                    value="casual"
                                                >
                                                    Casual
                                                </SelectItem>
                                
                                        </SelectContent>
                                    </Select>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                         <Controller
                            name="duration"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-title">
                                        Companion Name
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-rhf-demo-title"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="15"
                                        autoComplete="off"
                                        className="input"
                                        type="number"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter>
                <Field orientation="horizontal">
                    {/* <Button type="button" variant="outline" onClick={() => form.reset()}>
                        Reset
                    </Button> */}
                    <Button type="submit" className='w-full cursor-pointer' form="form-rhf-demo">
                        Build Your Companion
                    </Button>
                </Field>
            </CardFooter>
        </Card>
    )
}

export default ComapnionForm
