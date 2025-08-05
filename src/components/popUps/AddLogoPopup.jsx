import React, { useEffect, useState } from 'react';
import AdminInput from '../input/AdminInput';
import ButtonSimple from '../buttons/ButtonSimple';
import ButtonSimpleFilled from '../buttons/ButtonSimpleFilled';
import UploadImageInput from '../input/UploadImageInput';

export default function AddLogoPopup({ onSave, onCancel, initialData }) {
  const [companyName, setCompanyName] = useState('');
  const [status, setStatus] = useState(true);
  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);

  // Prefill data for edit
  useEffect(() => {
    if (initialData) {
      setCompanyName(initialData.name || '');
      setStatus(initialData.status ?? true);
      setLogo(null); // Clear file input
      setLogoPreview(initialData.logo || null); // ✅ Fixed: using correct prop
    }
  }, [initialData]);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setLogo(file);
    setLogoPreview(file ? URL.createObjectURL(file) : null);
  };

  const handleReset = () => {
    setCompanyName('');
    setStatus(true);
    setLogo(null);
    setLogoPreview(null);
  };

  const handleSave = () => {
    if (!companyName.trim() || (!logo && !logoPreview)) return;
    onSave({
      name: companyName.trim(),
      status,
      logo,
      id: initialData?.id,
    });
    handleReset();
  };

  return (
    <div className="w-[648px] py-6 flex flex-col items-center gap-6 ">
      <div className="w-full gap-10 flex flex-col items-center justify-center">
        <AdminInput
          label="Company Name"
          name="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Enter the Company Name"
        />
        <AdminInput
          label="Status"
          name="status"
          type="select"
          value={status}
          onChange={(e) => setStatus(e.target.value === 'true')}
          options={[
            { label: 'Active', value: true },
            { label: 'Inactive', value: false },
          ]}
        />
      </div>

      <UploadImageInput
        value={logo}
        onChange={handleLogoChange}
        preview={logoPreview}
        label="Upload Logo"
      />

      <div className="w-[296px] flex justify-center items-center gap-3 mt-2">
        <ButtonSimple
          onClick={handleReset}
          className="px-6 py-3 self-stretch gap-3 w-full"
        >
          Reset
        </ButtonSimple>
        <ButtonSimpleFilled
          className="px-6 py-3 self-stretch gap-3 w-full"
          onClick={handleSave}
          disabled={!companyName.trim() || (!logo && !logoPreview)}
        >
          Save
        </ButtonSimpleFilled>
      </div>
    </div>
  );
}
