import { ref, uploadBytes } from 'firebase/storage';
import { auth, firestore, storage } from '../App';
import { useRef, useState } from 'react';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { currentUserData } from '../pages/login';

export default function UploadPage() {
  const nameRef = useRef(null);
  const typeRef = useRef(null);

  var navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  var path =
    'https://firebasestorage.googleapis.com/v0/b/ulishare-1f60f.appspot.com/o/%file%?alt=media&token=%token%';

  async function handleFileSubmit(file) {
    var r = ref(storage, file.name);
    var idCount = (await getDocs(collection(firestore, 'documents'))).size;
    moment.locale('en');

    uploadBytes(r, file).then(async (data) => {
      var user = auth.currentUser;
      var token = await user.getIdToken;
      var docSnapshot = await getDoc(doc(firestore, 'users', user.uid));
      var _d = docSnapshot.data();
      var metadata = data.metadata;
      await setDoc(doc(firestore, 'documents', `${idCount + 1}`), {
        comments: [],
        name: nameRef.current.value,
        rating: 0,
        reaction: { heart: 0, helpful: 3 },
        ref: path
          .replace('%file%', metadata.fullPath)
          .replace('%token%', token),
        type: typeRef.current.value,
        upload_date: moment().format('HH:mm dd/MM/yyyy'),
        user_id: user.uid,
      });

      _d.documents.push(`${idCount + 1}`);
      await updateDoc(doc(firestore, 'users', auth.currentUser.uid), {
        documents: _d.documents,
      });

      alert('Đăng tải tài liệu thành công');
      window.location.href = '/user/id=' + auth.currentUser.uid;
    });
  }
  return (
    <>
      <div class="flex items-center justify-center">
        <div class="mx-auto w-full sm:max-w-[550px] bg-white">
          <div class="py-6 px-9">
            <div class="mb-5">
              <label class="mb-3 block text-base font-medium text-[#07074D]">
                Tên tài liệu:
              </label>
              <input
                required
                ref={nameRef}
                placeholder="Nhập tên tài liệu..."
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label class="mb-3 block text-base font-medium text-[#07074D]">
                Loại tài liệu:
              </label>
              <select
                ref={typeRef}
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option value="Môn đại cương" key="">
                  Môn đại cương
                </option>
                <option value="Môn chuyên ngành" key="">
                  Môn chuyên ngành
                </option>
                <option value="Ôn thi CDR NN1" key="">
                  Ôn thi CDR NN1
                </option>
                <option value="Ôn thi CDR NN2" key="">
                  Ôn thi CDR NN2
                </option>
                <option value="Khác" key="">
                  Khác
                </option>
              </select>
            </div>

            <div class="mb-6 pt-4">
              <label class="mb-5 block text-xl font-semibold text-[#07074D]">
                Tải file lên
              </label>

              <div class="mb-8">
                <input
                  type="file"
                  name="file"
                  id="file"
                  class="sr-only"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setSelectedFile(file);
                  }}
                  accept=".pdf"
                />
                {selectedFile == null ? (
                  <label
                    for="file"
                    class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                  >
                    <div>
                      <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                        Kéo thả file vào đây
                      </span>
                      <span class="mb-2 block text-base font-medium text-[#6B7280]">
                        hoặc
                      </span>
                      <span class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                        Chọn tệp
                      </span>
                    </div>
                  </label>
                ) : (
                  <>
                    Đã lựa chọn <b>{selectedFile.name}</b>
                  </>
                )}
              </div>
            </div>

            <div>
              <button
                onClick={() => {
                  handleFileSubmit(selectedFile);
                  setLoading(true);
                }}
                class={`${
                  loading ? 'disable bg-gray-300' : 'bg-[#6A64F1]'
                } hover:shadow-form w-full rounded-md py-3 px-8 text-center text-base font-semibold text-white outline-none `}
              >
                Đăng tải
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
