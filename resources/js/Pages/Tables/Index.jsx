import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/inertia-react';
 
export default function Index({ auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
    });
 
    const submit = (e) => {
        e.preventDefault();
        post(route('tables.store'), { onSuccess: () => reset() });
    };
 
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Tables" />
            <form action="" onSubmit={submit}>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2 bg-white">
                                    <input
                                        type="text"
                                        className="w-full"
                                        name="groups"
                                        value={data.groups}
                                        onChange={(e) =>
                                            setData('groups', e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.groups}
                                        className="mt-2"
                                    />
                                </td>
                                <td className="border px-4 py-2 bg-white">
                                    <input
                                        type="text"
                                        className="w-full"
                                        name="customer_name"
                                        value={data.customer_name}
                                        onChange={(e) =>
                                            setData(
                                                'customer_name',
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.customer_name}
                                        className="mt-2"
                                    />
                                </td>
                                <td className="border px-4 py-2 bg-white">
                                    <input
                                        type="text"
                                        className="w-full"
                                        name="customer_id"
                                        value={data.customer_id}
                                        onChange={(e) =>
                                            setData('customer_id', e.target.value)
                                        } 
                                    />
                                    <InputError
                                        message={errors.customer_id}
                                        className="mt-2"
                                    />
                                </td>
                                <td className="border px-4 py-2 bg-white">
                                    <input
                                        type="text"
                                        className="w-full"
                                        name="logo_url"
                                        value={data.logo_url}
                                        onChange={(e) =>
                                            setData('logo_url', e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.logo_url}
                                        className="mt-2"
                                    />
                                </td>
                                <td className="border px-4 py-2 bg-white">
                                    <input
                                        type="text"
                                        className="w-full"
                                        name="connect_link"
                                        value={data.connect_link}
                                        onChange={(e) =>
                                            setData(
                                                'connect_link',
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.connect_link}
                                        className="mt-2"
                                    />
                                </td>
                                <td className="border px-4 py-2 bg-white">
                                    <input
                                        type="text"
                                        className="w-full"
                                        name="welcome_message"
                                        value={data.welcome_message}
                                        onChange={(e) =>
                                            setData(
                                                'welcome_message',
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.welcome_message}
                                        className="mt-2"
                                    />
                                </td>
                                <td className="border px-4 py-2 bg-white">
                                    <PrimaryButton
                                        className="w-full"
                                        processing={processing}
                                        onClick={submit}
                                    >
                                        Create
                                    </PrimaryButton>
                                </td>
                            </tr>
                        </tbody>
                        
                    </form>
            <div className="max-w-full mx-auto p-4 sm:p-6 lg:p-8">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Groups</th>
                            <th className="px-4 py-2">Customer Name</th>
                            <th className="px-4 py-2">Customer ID</th>
                            <th className="px-4 py-2">Logo URL</th>
                            <th className="px-4 py-2">Connect Link</th>
                            <th className="px-4 py-2">Welcome Message</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            <tr>
                                <td className="border px-4 py-2 bg-white">
                                    {data.groups}
                                </td>
                                <td className="border px-4 py-2 bg-white">
                                    {data.customer_name}
                                </td>
                                <td className="border px-4 py-2 bg-white">
                                    {data.customer_id}
                                </td>
                                <td className="border px-4 py-2 bg-white">
                                    {data.logo_url}
                                </td>
                                <td className="border px-4 py-2 bg-white">
                                    {data.connect_link}
                                </td>
                                <td className="border px-4 py-2 bg-white">
                                    {data.welcome_message}
                                </td>
                                <td className="border px-4 py-2 bg-white">
                                    <PrimaryButton
                                        className="w-full"
                                        processing={processing}
                                        onClick={submit}
                                    >
                                        Delete
                                    </PrimaryButton>
                                </td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}