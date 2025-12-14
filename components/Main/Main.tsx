'use client'

import { generateCommitMessage } from '../../app/ai'
import { Form, Input, Button, Card, Alert } from 'antd'
import { CopyOutlined } from '@ant-design/icons'
import styles from './Main.module.css'
import { useState } from 'react'

interface CommitFormValues {
    branch: string
    component: string
    description: string
}

const Main = (): React.JSX.Element => {
    const [form] = Form.useForm()
    const [generatedCommit, setGeneratedCommit] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (values: CommitFormValues): Promise<void> => {
        setLoading(true)
        setGeneratedCommit('')
        setError(null)

        const { branch, component, description } = values
        const message = await generateCommitMessage(branch, component, description)
        if (message) {
            setGeneratedCommit(message)
        } else {
            setError("Failed to generate commit message. Please try again.")
        }
        setLoading(false)
    }

    const copyToClipboard = () => {
        if (generatedCommit) {
            navigator.clipboard.writeText(generatedCommit)
        }
    }

    return (
        <main className={styles.main}>
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                disabled={loading}
            >
                <Form.Item
                    label="Branch Name"
                    name="branch"
                    rules={[{ required: true, message: 'Please enter the branch name' }]}
                >
                    <Input placeholder="PABAU2-34567" />
                </Form.Item>

                <Form.Item
                    label="Component / Area"
                    name="component"
                    rules={[{ required: true, message: 'Please enter the component/area' }]}
                >
                    <Input placeholder="client card, invoices..." />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please describe your changes' }]}
                >
                    <Input.TextArea placeholder="Describe what you did... (e.g. Added validation to login form)" rows={4} />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading} block>
                        {loading ? 'Generating...' : 'CommitCraft'}
                    </Button>
                </Form.Item>
            </Form>

            {error && (
                <Alert title={error} type="error" showIcon style={{ marginTop: 20 }} />
            )}

            {generatedCommit && (
                <Card
                    title="Generated Commit Message"
                    style={{ marginTop: 20, width: '100%' }}
                    extra={<Button type="text" icon={<CopyOutlined />} onClick={copyToClipboard}>Copy</Button>}
                >
                    <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', margin: 0 }}>
                        {generatedCommit}
                    </pre>
                </Card>
            )}
        </main>
    )
}

export default Main