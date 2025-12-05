'use client'

import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function TestEmailPage() {
    const [status, setStatus] = useState('Idle')
    const [config, setConfig] = useState<any>({})
    const [logs, setLogs] = useState<string[]>([])

    const addLog = (msg: string) => setLogs(prev => [...prev, msg])

    useEffect(() => {
        const conf = {
            serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        }
        setConfig(conf)
        addLog(`Config loaded: ${JSON.stringify(conf, null, 2)}`)
    }, [])

    const handleTest = async () => {
        setStatus('Sending...')
        addLog('Attempting to send...')

        try {
            if (!config.serviceId || !config.templateId || !config.publicKey) {
                throw new Error('Missing configuration')
            }

            await emailjs.send(
                config.serviceId,
                config.templateId,
                {
                    from_name: 'Test User',
                    from_email: 'test@example.com',
                    message: 'Test message from isolated test page',
                    to_name: 'Adi Mulyadi'
                },
                config.publicKey
            )
            setStatus('Success')
            addLog('Email sent successfully!')
        } catch (error: any) {
            setStatus('Error')
            addLog(`Error: ${error.message}`)
            if (error.text) addLog(`Error Text: ${error.text}`)
            addLog(`Full Error: ${JSON.stringify(error)}`)
            console.error(error)
        }
    }

    return (
        <div className="p-8 font-mono text-sm">
            <h1 className="text-xl font-bold mb-4">EmailJS Diagnostic Page</h1>

            <div className="mb-4 p-4 border rounded bg-gray-100 dark:bg-gray-800">
                <h2 className="font-bold">Configuration Status:</h2>
                <pre>{JSON.stringify(config, null, 2)}</pre>
            </div>

            <button
                onClick={handleTest}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
            >
                Send Test Email
            </button>

            <div className="p-4 border rounded bg-black text-green-400 h-64 overflow-auto">
                <h2 className="font-bold text-white mb-2">Logs:</h2>
                {logs.map((log, i) => (
                    <div key={i} className="mb-1">{log}</div>
                ))}
            </div>

            <div className="mt-4">
                <strong>Status:</strong> {status}
            </div>
        </div>
    )
}
