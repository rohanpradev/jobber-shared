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
 * @function uploadFile
 * this method is used to upload a file into cludinary
 * @link https://cloudinary.com/
 * @param file
 * @param param1
 * @returns
 */
export const uploadFile = (
  file: string,
  { resource_type = 'auto', ...options }: UploadApiOptions
): Promise<UploadApiErrorResponse | UploadApiResponse | undefined> =>
  cloudinaryUpload(file, { ...options, resource_type });
