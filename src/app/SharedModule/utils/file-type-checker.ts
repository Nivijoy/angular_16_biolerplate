export const fileTypeValidator = (file: File, accept: string): boolean => {
    const fileTypes = accept.split(',').map(file_type => file_type.trim());
    return fileTypes.some(file_type => file_type === file.type);
}

export default fileTypeValidator;