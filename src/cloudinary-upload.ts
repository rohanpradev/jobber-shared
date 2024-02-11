import {
  v2,
  UploadApiErrorResponse,
  UploadApiResponse,
  UploadApiOptions,
} from 'cloudinary';
import { promisify } from 'node:util';

type CloudinaryPromise = (
  file: string,
  options: UploadApiOptions
) => Promise<UploadApiResponse | undefined>;

const cloudinaryUpload: CloudinaryPromise = promisify(v2.uploader.upload);

/**
 * Uploads a file to Cloudinary.
 *
 * @param file - The file path to upload.
 * @param options - The upload options.
 * @returns A promise that resolves to the upload response.
 */
export const uploadFile = (
  file: string,
  { resource_type = 'auto', ...options }: UploadApiOptions
): Promise<UploadApiErrorResponse | UploadApiResponse | undefined> =>
  cloudinaryUpload(file, { ...options, resource_type });
