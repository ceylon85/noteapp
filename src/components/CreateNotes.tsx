import * as React from 'react';
import { Alert, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Note } from '../models/note.model';
interface ICreateNotesProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FC<ICreateNotesProps> = ({ notes, setNotes }) => {
    const [error, setError] = React.useState<string>("");
    const titleRef = React.useRef<HTMLInputElement | null>(null);
    const textRef = React.useRef<HTMLTextAreaElement | null>(null);
    const colorRef = React.useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        if (titleRef.current?.value === '' || textRef.current?.value === '') {
            return setError('빈 칸 없이 채워주세요')
        }
        setError('');
        setNotes([...notes, {
            id: (new Date()).toString(),
            title: (titleRef.current as HTMLInputElement).value,
            text: (textRef.current as HTMLTextAreaElement).value,
            color: (colorRef.current as HTMLInputElement).value,
            date: (new Date()).toString()
        }]);
    
        // 내용 채우고 빈문자열
            (titleRef.current as HTMLInputElement).value = '';
        (textRef.current as HTMLTextAreaElement).value = '';

    }
    return (
        <>
            <h2>Create Notes</h2>
            {error && <Alert variant='danger'> {error}</Alert>}
            <Form className='mt-3 mb-3' onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className='mb-3' controlId='formBasicTitle'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type='text' placeholder='노트의 제목을 넣어주세요' ref={titleRef} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicText'>
                    <Form.Label>Text</Form.Label>
                    <Form.Control placeholder='노트의 내용을 채워주세요' as='textarea' rows={3} ref={textRef} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='colorInput'>Notes Color</Form.Label>
                    <Form.Control type='color' id='colorInput' defaultValue={"#dfdfdf"} title='색상을 선택하세요' ref={colorRef} />
                </Form.Group>
                <Button type='submit' variant='primary'>Submit</Button>
            </Form>
        </>
    );
};

export default CreateNotes;
