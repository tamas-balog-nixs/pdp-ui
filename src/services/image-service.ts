import axios from 'axios';
import {IThumbnailRequest} from "../shared/model/thumbnailRequest.model.ts";

const rootUrl = "http://localhost:8080/images";

export const upload = async (file: File) => {
    const fd = new FormData();
    fd.append('image', file)
    return axios.post(rootUrl, fd, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });
};

export const createThumbnail = (thumbnailRequest: IThumbnailRequest) => {
    axios.post(`${rootUrl}/thumbnail`, thumbnailRequest);
}