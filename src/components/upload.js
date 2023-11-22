export default function UploadPage() {
  return (
    <>
      <div class="flex items-center justify-center">
        <div class="mx-auto w-full sm:max-w-[550px] bg-white">
          <form class="py-6 px-9">
            <div class="mb-5">
              <label class="mb-3 block text-base font-medium text-[#07074D]">
                Tên tài liệu:
              </label>
              <input
                required
                placeholder="Nhập tên tài liệu..."
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label class="mb-3 block text-base font-medium text-[#07074D]">
                Loại tài liệu:
              </label>
              <select class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md">
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
                Upload File
              </label>

              <div class="mb-8">
                <input type="file" name="file" id="file" class="sr-only" />
                <label
                  for="file"
                  class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                >
                  <div>
                    <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                      Drop files here
                    </span>
                    <span class="mb-2 block text-base font-medium text-[#6B7280]">
                      Or
                    </span>
                    <span class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                      Browse
                    </span>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <button class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Send File
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
