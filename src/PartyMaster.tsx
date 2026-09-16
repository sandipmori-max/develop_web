import React, { useMemo, useState } from "react";
import {
  Save,
  X,
  HelpCircle,
  Star,
  FileText,
  Plus,
  Trash2,
  Search,
  Building2,
  MapPin,
  UserRound,
  Landmark,
  ReceiptText,
  BadgeCheck,
  WalletCards,
  Megaphone,
  FileClock,
  ChevronDown,
  ChevronUp,
  AlertCircle,
} from "lucide-react";

import "./PartyMaster.css";

interface BranchRow {
  id: number;
  branchId: string;
  active: boolean;
}

interface PartyForm {
  ledgerId: string;
  ledgerName: string;
  ledgerCode: string;
  alias: string;
  printName: string;

  groupId: string;
  groupName: string;
  gstNature: string;
  maintainBillwise: boolean;

  address: string;
  cityId: string;
  city: string;
  district: string;
  state: string;
  country: string;
  pin: string;
  distance: string;

  contactPerson: string;
  designationId: string;
  designation: string;
  mobile: string;
  whatsapp: string;
  email: string;
  website: string;
  phone: string;

  bankName: string;
  bankAc: string;
  bankAcNo: string;
  ifscCode: string;
  swiftCode: string;
  bankTransType: string;

  gstNo: string;
  gstDate: string;
  gstStateCode: string;
  gstArn: string;
  gstPer: string;
  gstSupplyType: string;
  isRcm: boolean;
  ineligibleItc: boolean;

  commissionRate: string;
  division: string;
  range: string;
  panNo: string;
  tanNo: string;

  msmeNo: string;
  msmeDate: string;
  msmeType: string;

  tdsApplicable: boolean;
  tdsSectionId: string;
  tdsSection: string;
  tdsPer: string;

  tinNo: string;
  tinDate: string;
  cst: string;
  cstDate: string;

  ssino: string;
  serviceTaxNo: string;
  eccNo: string;

  paymentTermId: string;
  paymentTerm: string;
  mktUserId: string;
  mktUser: string;
  creditLimit: string;

  fssaiLicNo: string;
  fssaiIssueOn: string;
  fssaiExpiryOn: string;

  drugLicNo20B: string;
  drug20BIssueOn: string;
  drug20BExpiryOn: string;

  drugLicNo21B: string;
  drug21BIssueOn: string;
  drug21BExpiryOn: string;

  remarks: string;

  entryBy: string;
  entryDate: string;
  status: string;
}

const initialForm: PartyForm = {
  ledgerId: "",
  ledgerName: "",
  ledgerCode: "",
  alias: "",
  printName: "",

  groupId: "",
  groupName: "",
  gstNature: "",
  maintainBillwise: false,

  address: "",
  cityId: "",
  city: "",
  district: "",
  state: "",
  country: "India",
  pin: "",
  distance: "",

  contactPerson: "",
  designationId: "",
  designation: "",
  mobile: "",
  whatsapp: "",
  email: "",
  website: "",
  phone: "",

  bankName: "",
  bankAc: "",
  bankAcNo: "",
  ifscCode: "",
  swiftCode: "",
  bankTransType: "",

  gstNo: "",
  gstDate: "",
  gstStateCode: "",
  gstArn: "",
  gstPer: "",
  gstSupplyType: "",
  isRcm: false,
  ineligibleItc: false,

  commissionRate: "",
  division: "",
  range: "",
  panNo: "",
  tanNo: "",

  msmeNo: "",
  msmeDate: "",
  msmeType: "",

  tdsApplicable: false,
  tdsSectionId: "",
  tdsSection: "",
  tdsPer: "",

  tinNo: "",
  tinDate: "",
  cst: "",
  cstDate: "",

  ssino: "",
  serviceTaxNo: "",
  eccNo: "",

  paymentTermId: "",
  paymentTerm: "",
  mktUserId: "165",
  mktUser: "DEVAPP",
  creditLimit: "",

  fssaiLicNo: "",
  fssaiIssueOn: "",
  fssaiExpiryOn: "",

  drugLicNo20B: "",
  drug20BIssueOn: "",
  drug20BExpiryOn: "",

  drugLicNo21B: "",
  drug21BIssueOn: "",
  drug21BExpiryOn: "",

  remarks: "",

  entryBy: "DEVAPP",
  entryDate: "16-Sep-2026 16:50:44",
  status: "A",
};

const branchOptions = [
  { id: "1", name: "KESHOD" },
  { id: "2", name: "VERAVAL" },
  { id: "3", name: "MANGROL" },
  { id: "4", name: "JUNAGADH" },
  { id: "5", name: "CHORVAD" },
  { id: "6", name: "RAJKOT" },
];

const gstStateOptions = [
  ["01", "Jammu & Kashmir"],
  ["02", "Himachal Pradesh"],
  ["03", "Punjab"],
  ["04", "Chandigarh"],
  ["05", "Uttarakhand"],
  ["06", "Haryana"],
  ["07", "Delhi"],
  ["08", "Rajasthan"],
  ["09", "Uttar Pradesh"],
  ["10", "Bihar"],
  ["11", "Sikkim"],
  ["12", "Arunachal Pradesh"],
  ["13", "Nagaland"],
  ["14", "Manipur"],
  ["15", "Mizoram"],
  ["16", "Tripura"],
  ["17", "Meghalaya"],
  ["18", "Assam"],
  ["19", "West Bengal"],
  ["20", "Jharkhand"],
  ["21", "Odisha"],
  ["22", "Chhattisgarh"],
  ["23", "Madhya Pradesh"],
  ["24", "Gujarat"],
  ["25", "Daman & Diu"],
  ["26", "Dadra & Nagar Haveli"],
  ["27", "Maharashtra"],
  ["29", "Karnataka"],
  ["30", "Goa"],
  ["31", "Lakshadweep"],
  ["32", "Kerala"],
  ["33", "Tamil Nadu"],
  ["34", "Pondicherry"],
  ["35", "Andaman & Nicobar Islands"],
  ["36", "Telangana"],
  ["37", "Andhra Pradesh"],
  ["98", "Other Territory"],
];

const gstPercentOptions = ["0.00", "3.00", "5.00", "12.00", "18.00", "28.00"];

const PartyMaster: React.FC = () => {
  const [form, setForm] = useState<PartyForm>(initialForm);

  const [branches, setBranches] = useState<BranchRow[]>([
    { id: 0, branchId: "1", active: true },
    { id: 1, branchId: "2", active: true },
    { id: 2, branchId: "3", active: true },
    { id: 3, branchId: "4", active: true },
    { id: 4, branchId: "5", active: true },
    { id: 5, branchId: "6", active: true },
  ]);

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    basic: true,
    branch: true,
    address: true,
    contact: true,
    bank: true,
    gst: true,
    additional: false,
    msme: false,
    tds: false,
    oldTax: false,
    marketing: true,
    license: false,
    remarks: true,
    audit: false,
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [saved, setSaved] = useState(false);

  const updateField = <K extends keyof PartyForm>(
    key: K,
    value: PartyForm[K]
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));

    setSaved(false);
  };

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const addBranch = () => {
    setBranches((prev) => [
      ...prev,
      {
        id: Date.now(),
        branchId: "",
        active: true,
      },
    ]);
  };

  const deleteBranch = (id: number) => {
    setBranches((prev) => prev.filter((item) => item.id !== id));
  };

  const updateBranch = (
    id: number,
    key: keyof BranchRow,
    value: string | boolean
  ) => {
    setBranches((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              [key]: value,
            }
          : item
      )
    );
  };

  const validateGST = (value: string) => {
    if (!value) {
      updateField("gstNo", "");
      updateField("panNo", "");
      return;
    }

    if (value.toUpperCase() === "URP") {
      updateField("gstNo", "URP");
      return;
    }

    const gstRegex =
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

    const gst = value.toUpperCase();

    if (!gstRegex.test(gst)) {
      setErrors((prev) => [
        ...prev.filter((x) => x !== "Invalid GSTIN"),
        "Invalid GSTIN",
      ]);
      return;
    }

    const stateCode = gst.substring(0, 2);
    const pan = gst.substring(2, 12);

    updateField("gstNo", gst);
    updateField("panNo", pan);
    updateField("gstStateCode", stateCode);

    setErrors((prev) => prev.filter((x) => x !== "Invalid GSTIN"));
  };

  const validateForm = () => {
    const newErrors: string[] = [];

    if (!form.ledgerName.trim()) {
      newErrors.push("Ledger Name is required");
    }

    if (!form.groupName.trim()) {
      newErrors.push("Group Name is required");
    }

    if (!form.gstNature.trim()) {
      newErrors.push("GST Nature is required");
    }

    if (!form.address.trim()) {
      newErrors.push("Address is required");
    }

    if (!form.city.trim()) {
      newErrors.push("City is required");
    }

    if (!form.pin.trim()) {
      newErrors.push("Pin Code is required");
    }

    if (!form.paymentTerm.trim()) {
      newErrors.push("Payment Term is required");
    }

    if (!form.mktUser.trim()) {
      newErrors.push("Mkt By is required");
    }

    if (!form.status) {
      newErrors.push("Status is required");
    }

    if (form.gstNature === "Regular" && !form.gstNo) {
      newErrors.push("GST No is required for Regular GST Nature");
    }

    setErrors(newErrors);

    return newErrors.length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const payload = {
      ...form,
      branches: branches.map((branch) => ({
        ledgerBranchId: branch.id,
        ledgerId: form.ledgerId,
        branchId: branch.branchId,
        active: branch.active ? "1" : "0",
      })),
    };

    console.log("Party Master Payload:", payload);

    setSaved(true);

    window.setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  const handleLedgerReport = () => {
    const ledgerId = form.ledgerId || "0";

    window.location.href = `indexlist.html?Ledger/&paramlist=${ledgerId}`;
  };

  const handleGSTSearch = () => {
    window.location.href = "index.html?FAS_GSTIN/0";
  };

  const selectedBranchCount = useMemo(
    () => branches.filter((item) => item.branchId).length,
    [branches]
  );

  const SectionHeader = ({
    id,
    icon,
    title,
    description,
    badge,
  }: {
    id: string;
    icon: React.ReactNode;
    title: string;
    description?: string;
    badge?: string;
  }) => (
    <button
      type="button"
      className="pm-section-header"
      onClick={() => toggleSection(id)}
    >
      <span className="pm-section-icon">{icon}</span>

      <span className="pm-section-heading">
        <strong>{title}</strong>
        {description && <small>{description}</small>}
      </span>

      {badge && <span className="pm-section-badge">{badge}</span>}

      <span className="pm-section-arrow">
        {openSections[id] ? (
          <ChevronUp size={18} />
        ) : (
          <ChevronDown size={18} />
        )}
      </span>
    </button>
  );

  const Field = ({
    label,
    required,
    children,
    className = "",
  }: {
    label: string;
    required?: boolean;
    children: React.ReactNode;
    className?: string;
  }) => (
    <div className={`pm-field ${className}`}>
      <label>
        {label}
        {required && <span className="pm-required">*</span>}
      </label>
      {children}
    </div>
  );

  const Input = ({
    id,
    value,
    onChange,
    placeholder,
    type = "text",
    readOnly = false,
    disabled = false,
    maxLength,
    className = "",
  }: {
    id: string;
    value: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    type?: string;
    readOnly?: boolean;
    disabled?: boolean;
    maxLength?: number;
    className?: string;
  }) => (
    <input
      id={id}
      className={`pm-input ${className}`}
      type={type}
      value={value}
      placeholder={placeholder}
      readOnly={readOnly}
      disabled={disabled}
      maxLength={maxLength}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );

  const Select = ({
    id,
    value,
    onChange,
    children,
    className = "",
  }: {
    id: string;
    value: string;
    onChange?: (value: string) => void;
    children: React.ReactNode;
    className?: string;
  }) => (
    <select
      id={id}
      className={`pm-input pm-select ${className}`}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    >
      {children}
    </select>
  );

  const LookupField = ({
    id,
    value,
    onChange,
    placeholder,
    onSearch,
    onNew,
  }: {
    id: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    onSearch?: () => void;
    onNew?: () => void;
  }) => (
    <div className="pm-lookup">
      <Input
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

      <button type="button" className="pm-icon-btn" onClick={onSearch}>
        <Search size={16} />
      </button>

      {onNew && (
        <button type="button" className="pm-icon-btn pm-new-btn" onClick={onNew}>
          <Plus size={16} />
        </button>
      )}
    </div>
  );

  const Checkbox = ({
    checked,
    onChange,
    label,
  }: {
    checked: boolean;
    onChange: (value: boolean) => void;
    label?: string;
  }) => (
    <label className="pm-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="pm-checkmark" />
      {label && <span>{label}</span>}
    </label>
  );

  return (
    <div className="party-master">
      {/* HEADER */}
      <header className="pm-topbar">
        <div className="pm-title-area">
          <div className="pm-title-icon">
            <Building2 size={22} />
          </div>

          <div>
            <h1>Business Partner / Party Master</h1>
            <p>Create and manage customer, supplier and business partner details</p>
          </div>
        </div>

        <div className="pm-header-actions">
          <button
            type="button"
            className="pm-header-icon"
            title="Add to Favorite"
          >
            <Star size={18} />
          </button>

          <button
            type="button"
            className="pm-header-icon"
            title="Help"
          >
            <HelpCircle size={18} />
          </button>

          <button
            type="button"
            className="pm-header-icon pm-close"
            title="Close"
          >
            <X size={19} />
          </button>
        </div>
      </header>

      {/* TOOLBAR */}
      <div className="pm-toolbar">
        <div className="pm-toolbar-left">
          <button
            type="button"
            className="pm-btn pm-btn-primary"
            onClick={handleSave}
          >
            <Save size={17} />
            Save
          </button>

          <button
            type="button"
            className="pm-btn pm-btn-secondary"
            onClick={handleLedgerReport}
          >
            <FileText size={17} />
            Ledger Report
          </button>
        </div>

        <div className="pm-toolbar-right">
          <span className="pm-mode">
            <span className="pm-status-dot" />
            New Entry
          </span>

          <span className="pm-divider" />

          <span className="pm-entry-date">
            16-Sep-2026
          </span>
        </div>
      </div>

      {/* VALIDATION */}
      {errors.length > 0 && (
        <div className="pm-alert">
          <AlertCircle size={18} />

          <div>
            <strong>Please check the following:</strong>

            <ul>
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            onClick={() => setErrors([])}
            className="pm-alert-close"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {saved && (
        <div className="pm-success">
          <BadgeCheck size={18} />
          Party Master details are ready to be saved.
        </div>
      )}

      <main className="pm-content">
        {/* BASIC INFORMATION */}
        <section className="pm-card">
          <SectionHeader
            id="basic"
            icon={<Building2 size={18} />}
            title="Basic Information"
            description="Primary ledger and classification details"
            badge="Required"
          />

          {openSections.basic && (
            <div className="pm-section-body">
              <div className="pm-grid pm-grid-12">
                <Field
                  label="Ledger Name"
                  required
                  className="pm-col-6"
                >
                  <Input
                    id="txtfas_ledgerpartyledgername"
                    value={form.ledgerName}
                    maxLength={128}
                    onChange={(value) =>
                      updateField("ledgerName", value)
                    }
                    placeholder="Enter ledger name"
                  />
                </Field>

                <Field label="Ledger Code" className="pm-col-3">
                  <Input
                    id="txtfas_ledgerpartyledgercode"
                    value={form.ledgerCode}
                    maxLength={32}
                    onChange={(value) =>
                      updateField("ledgerCode", value)
                    }
                    placeholder="Ledger code"
                  />
                </Field>

                <Field label="Print Name" className="pm-col-3">
                  <Input
                    id="txtfas_ledgerpartyname"
                    value={form.printName}
                    maxLength={128}
                    onChange={(value) =>
                      updateField("printName", value)
                    }
                    placeholder="Print name"
                  />
                </Field>

                <Field label="Alias" className="pm-col-4">
                  <Input
                    id="txtfas_ledgerpartyallias"
                    value={form.alias}
                    maxLength={128}
                    onChange={(value) =>
                      updateField("alias", value)
                    }
                    placeholder="Alternate name"
                  />
                </Field>

                <Field
                  label="Group Name"
                  required
                  className="pm-col-5"
                >
                  <LookupField
                    id="txtfas_ledgerpartygroupname"
                    value={form.groupName}
                    onChange={(value) =>
                      updateField("groupName", value)
                    }
                    placeholder="Select group name"
                    onSearch={() =>
                      console.log("Open Group Search")
                    }
                    onNew={() =>
                      console.log("Create New Group")
                    }
                  />
                </Field>

                <Field
                  label="GST Nature"
                  required
                  className="pm-col-3"
                >
                  <Select
                    id="txtfas_ledgerpartygstnature2"
                    value={form.gstNature}
                    onChange={(value) =>
                      updateField("gstNature", value)
                    }
                  >
                    <option value="">Select GST Nature</option>
                    <option value="Regular">Regular</option>
                    <option value="Composition">Composition</option>
                    <option value="Unregistered">Unregistered</option>
                    <option value="Consumer">Consumer</option>
                  </Select>
                </Field>

                <Field label="Maintain Billwise" className="pm-col-3">
                  <div className="pm-toggle-box">
                    <Checkbox
                      checked={form.maintainBillwise}
                      onChange={(value) =>
                        updateField("maintainBillwise", value)
                      }
                      label="Enable billwise"
                    />
                  </div>
                </Field>
              </div>
            </div>
          )}
        </section>

        {/* BRANCH */}
        <section className="pm-card">
          <SectionHeader
            id="branch"
            icon={<Building2 size={18} />}
            title="Ledger Branch"
            description="Assign this party to one or more branches"
            badge={`${selectedBranchCount} Branches`}
          />

          {openSections.branch && (
            <div className="pm-section-body pm-no-top">
              <div className="pm-table-wrapper">
                <table className="pm-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Branch Name</th>
                      <th>Active</th>
                      <th className="pm-action-column">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {branches.map((branch, index) => (
                      <tr key={branch.id}>
                        <td>
                          <span className="pm-row-number">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </td>

                        <td>
                          <select
                            className="pm-table-select"
                            value={branch.branchId}
                            onChange={(e) =>
                              updateBranch(
                                branch.id,
                                "branchId",
                                e.target.value
                              )
                            }
                          >
                            <option value="">
                              Select Branch Name
                            </option>

                            {branchOptions.map((option) => (
                              <option
                                key={option.id}
                                value={option.id}
                              >
                                {option.name}
                              </option>
                            ))}
                          </select>
                        </td>

                        <td>
                          <Checkbox
                            checked={branch.active}
                            onChange={(value) =>
                              updateBranch(
                                branch.id,
                                "active",
                                value
                              )
                            }
                          />
                        </td>

                        <td className="pm-action-column">
                          <button
                            type="button"
                            className="pm-delete-btn"
                            onClick={() =>
                              deleteBranch(branch.id)
                            }
                            title="Delete branch"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <button
                type="button"
                className="pm-add-row"
                onClick={addBranch}
              >
                <Plus size={16} />
                Add Branch
              </button>
            </div>
          )}
        </section>

        {/* ADDRESS */}
        <section className="pm-card">
          <SectionHeader
            id="address"
            icon={<MapPin size={18} />}
            title="Address & Location"
            description="Registered address and geographical information"
          />

          {openSections.address && (
            <div className="pm-section-body">
              <div className="pm-grid pm-grid-12">
                <Field label="Address" required className="pm-col-6">
                  <textarea
                    id="txtfas_ledgerpartyaddress"
                    className="pm-textarea"
                    rows={4}
                    maxLength={512}
                    value={form.address}
                    onChange={(e) =>
                      updateField("address", e.target.value)
                    }
                    placeholder="Enter complete address"
                  />
                </Field>

                <div className="pm-col-6 pm-location-grid">
                  <Field label="City" required>
                    <LookupField
                      id="txtfas_ledgerpartycityname"
                      value={form.city}
                      onChange={(value) =>
                        updateField("city", value)
                      }
                      placeholder="Select city"
                      onSearch={() =>
                        console.log("Open City Search")
                      }
                    />
                  </Field>

                  <Field label="District">
                    <Input
                      id="txtfas_ledgerpartydistrict"
                      value={form.district}
                      onChange={(value) =>
                        updateField("district", value)
                      }
                      placeholder="District"
                    />
                  </Field>
                </div>

                <Field label="State" className="pm-col-3">
                  <Input
                    id="txtfas_ledgerpartystate"
                    value={form.state}
                    readOnly
                  />
                </Field>

                <Field label="Country" className="pm-col-3">
                  <Input
                    id="txtfas_ledgerpartycountry"
                    value={form.country}
                    readOnly
                  />
                </Field>

                <Field label="Pin Code" required className="pm-col-3">
                  <Input
                    id="txtfas_ledgerpartypin"
                    value={form.pin}
                    maxLength={10}
                    onChange={(value) =>
                      updateField("pin", value)
                    }
                    placeholder="Pin code"
                  />
                </Field>

                <Field label="Distance" className="pm-col-3">
                  <Input
                    id="txtfas_ledgerpartydistance"
                    value={form.distance}
                    onChange={(value) =>
                      updateField("distance", value)
                    }
                    placeholder="Distance"
                  />
                </Field>
              </div>
            </div>
          )}
        </section>

        {/* CONTACT */}
        <section className="pm-card">
          <SectionHeader
            id="contact"
            icon={<UserRound size={18} />}
            title="Contact Information"
            description="Primary contact and communication details"
          />

          {openSections.contact && (
            <div className="pm-section-body">
              <div className="pm-grid pm-grid-12">
                <Field label="Contact Person" className="pm-col-4">
                  <Input
                    id="txtfas_ledgerpartycontactperson"
                    value={form.contactPerson}
                    onChange={(value) =>
                      updateField("contactPerson", value)
                    }
                    placeholder="Contact person"
                  />
                </Field>

                <Field label="Designation" className="pm-col-4">
                  <LookupField
                    id="txtfas_ledgerpartydesignation"
                    value={form.designation}
                    onChange={(value) =>
                      updateField("designation", value)
                    }
                    placeholder="Select designation"
                    onSearch={() =>
                      console.log("Open Designation Search")
                    }
                    onNew={() =>
                      console.log("Create Designation")
                    }
                  />
                </Field>

                <Field label="Mobile" className="pm-col-4">
                  <Input
                    id="txtfas_ledgerpartymobile"
                    value={form.mobile}
                    type="tel"
                    onChange={(value) =>
                      updateField("mobile", value)
                    }
                    placeholder="Mobile number"
                  />
                </Field>

                <Field label="WhatsApp Number" className="pm-col-4">
                  <Input
                    id="txtfas_ledgerpartymobile2"
                    value={form.whatsapp}
                    type="tel"
                    onChange={(value) =>
                      updateField("whatsapp", value)
                    }
                    placeholder="WhatsApp number"
                  />
                </Field>

                <Field label="Email" className="pm-col-4">
                  <Input
                    id="txtfas_ledgerpartyemailid"
                    value={form.email}
                    type="email"
                    onChange={(value) =>
                      updateField("email", value)
                    }
                    placeholder="Email address"
                  />
                </Field>

                <Field label="Phone" className="pm-col-4">
                  <Input
                    id="txtfas_ledgerpartyphone"
                    value={form.phone}
                    type="tel"
                    onChange={(value) =>
                      updateField("phone", value)
                    }
                    placeholder="Phone number"
                  />
                </Field>

                <Field label="Web Site" className="pm-col-6">
                  <Input
                    id="txtfas_ledgerpartywebsite"
                    value={form.website}
                    onChange={(value) =>
                      updateField("website", value)
                    }
                    placeholder="https://example.com"
                  />
                </Field>
              </div>
            </div>
          )}
        </section>

        {/* BANK */}
        <section className="pm-card">
          <SectionHeader
            id="bank"
            icon={<Landmark size={18} />}
            title="Bank Details"
            description="Banking and payment transaction information"
          />

          {openSections.bank && (
            <div className="pm-section-body">
              <div className="pm-grid pm-grid-12">
                <Field label="Bank Name" className="pm-col-4">
                  <Input
                    id="txtfas_ledgerpartybankname"
                    value={form.bankName}
                    maxLength={128}
                    onChange={(value) =>
                      updateField("bankName", value)
                    }
                    placeholder="Bank name"
                  />
                </Field>

                <Field label="Bank A/C" className="pm-col-4">
                  <Input
                    id="txtfas_ledgerpartybankac"
                    value={form.bankAc}
                    onChange={(value) =>
                      updateField("bankAc", value)
                    }
                    placeholder="Account name"
                  />
                </Field>

                <Field label="Bank A/C No" className="pm-col-4">
                  <Input
                    id="txtfas_ledgerpartybankacno"
                    value={form.bankAcNo}
                    maxLength={32}
                    onChange={(value) =>
                      updateField("bankAcNo", value)
                    }
                    placeholder="Account number"
                  />
                </Field>

                <Field label="IFSC Code" className="pm-col-4">
                  <Input
                    id="txtfas_ledgerpartybankifccode"
                    value={form.ifscCode}
                    maxLength={16}
                    onChange={(value) =>
                      updateField("ifscCode", value.toUpperCase())
                    }
                    placeholder="IFSC code"
                  />
                </Field>

                <Field label="SWIFT Code" className="pm-col-4">
                  <Input
                    id="txtfas_ledgerpartybankswiftcode"
                    value={form.swiftCode}
                    maxLength={16}
                    onChange={(value) =>
                      updateField("swiftCode", value.toUpperCase())
                    }
                    placeholder="SWIFT code"
                  />
                </Field>

                <Field label="Bank Trans Type" className="pm-col-4">
                  <Select
                    id="txtfas_ledgerpartybanktranstype"
                    value={form.bankTransType}
                    onChange={(value) =>
                      updateField("bankTransType", value)
                    }
                  >
                    <option value="">Select Transaction Type</option>
                    <option value="B">BANK</option>
                    <option value="C">CHEQUE</option>
                    <option value="D">Demand Draft</option>
                    <option value="I">Fund Transfer</option>
                    <option value="N">NEFT</option>
                    <option value="R">RTGS</option>
                  </Select>
                </Field>
              </div>
            </div>
          )}
        </section>

        {/* GST */}
        <section className="pm-card pm-highlight-card">
          <SectionHeader
            id="gst"
            icon={<ReceiptText size={18} />}
            title="GST Details"
            description="GST registration and taxation information"
            badge="Tax"
          />

          {openSections.gst && (
            <div className="pm-section-body">
              <div className="pm-gst-banner">
                <div>
                  <strong>GST Registration</strong>
                  <span>
                    Enter GSTIN to automatically identify PAN and state code.
                  </span>
                </div>

                <button
                  type="button"
                  className="pm-btn pm-btn-gst"
                  onClick={handleGSTSearch}
                >
                  <Search size={16} />
                  GST Search
                </button>
              </div>

              <div className="pm-grid pm-grid-12">
                <Field label="GST No" className="pm-col-4">
                  <Input
                    id="txtfas_ledgerpartygst_no"
                    value={form.gstNo}
                    maxLength={100}
                    onChange={(value) =>
                      updateField("gstNo", value.toUpperCase())
                    }
                    onBlur={() => validateGST(form.gstNo)}
                    placeholder="Enter GSTIN"
                    className={
                      errors.includes("Invalid GSTIN")
                        ? "pm-input-error"
                        : ""
                    }
                  />
                </Field>

                <Field label="GST Date" className="pm-col-4">
                  <Input
                    id="txtfas_ledgerpartygst_date"
                    value={form.gstDate}
                    type="date"
                    onChange={(value) =>
                      updateField("gstDate", value)
                    }
                  />
                </Field>

                <Field label="GST State Code" required className="pm-col-4">
                  <Select
                    id="txtfas_ledgerpartygst_statecode"
                    value={form.gstStateCode}
                    onChange={(value) =>
                      updateField("gstStateCode", value)
                    }
                  >
                    <option value="">Select State Code</option>

                    {gstStateOptions.map(([code, name]) => (
                      <option key={code} value={code}>
                        {code} - {name}
                      </option>
                    ))}
                  </Select>
                </Field>

                <Field label="GST ARN" className="pm-col-4">
                  <Input
                    id="txtfas_ledgerpartygst_arn"
                    value={form.gstArn}
                    readOnly
                    placeholder="Generated ARN"
                  />
                </Field>

                <Field label="GST Per (%)" className="pm-col-4">
                  <Select
                    id="txtfas_ledgerpartygstper"
                    value={form.gstPer}
                    onChange={(value) =>
                      updateField("gstPer", value)
                    }
                  >
                    <option value="">Select GST %</option>

                    {gstPercentOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}%
                      </option>
                    ))}
                  </Select>
                </Field>

                <Field label="GST Supply Type" required className="pm-col-4">
                  <Select
                    id="txtfas_ledgerpartygstsuptyp"
                    value={form.gstSupplyType}
                    onChange={(value) =>
                      updateField("gstSupplyType", value)
                    }
                  >
                    <option value="">Select Supply Type</option>
                    <option value="G">Goods</option>
                    <option value="S">Services</option>
                    <option value="N">NA</option>
                  </Select>
                </Field>

                <Field label="PAN No" className="pm-col-4">
                  <Input
                    id="txtfas_ledgerpartypanno"
                    value={form.panNo}
                    maxLength={32}
                    onChange={(value) =>
                      updateField("panNo", value.toUpperCase())
                    }
                    placeholder="PAN number"
                  />
                </Field>

                <Field label="TAN No" className="pm-col-4">
                  <Input
                    id="txtfas_ledgerpartytanno"
                    value={form.tanNo}
                    maxLength={32}
                    onChange={(value) =>
                      updateField("tanNo", value.toUpperCase())
                    }
                    placeholder="TAN number"
                  />
                </Field>

                <div className="pm-col-4 pm-check-row">
                  <Checkbox
                    checked={form.isRcm}
                    onChange={(value) =>
                      updateField("isRcm", value)
                    }
                    label="Reverse Charge Mechanism (RCM)"
                  />

                  <Checkbox
                    checked={form.ineligibleItc}
                    onChange={(value) =>
                      updateField("ineligibleItc", value)
                    }
                    label="Ineligible ITC"
                  />
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ADDITIONAL TAX */}
        <section className="pm-card">
          <SectionHeader
            id="additional"
            icon={<ReceiptText size={18} />}
            title="Additional Tax Details"
            description="Commission, division, range and legacy tax identifiers"
          />

          {openSections.additional && (
            <div className="pm-section-body">
              <div className="pm-grid pm-grid-12">
                <Field label="Commission Rate" className="pm-col-3">
                  <Input
                    id="txtfas_ledgerpartycommisioner"
                    value={form.commissionRate}
                    onChange={(value) =>
                      updateField("commissionRate", value)
                    }
                  />
                </Field>

                <Field label="Division" className="pm-col-3">
                  <Input
                    id="txtfas_ledgerpartydivision"
                    value={form.division}
                    onChange={(value) =>
                      updateField("division", value)
                    }
                  />
                </Field>

                <Field label="Range" className="pm-col-3">
                  <Input
                    id="txtfas_ledgerpartyrange"
                    value={form.range}
                    onChange={(value) =>
                      updateField("range", value)
                    }
                  />
                </Field>

                <Field label="TIN No" className="pm-col-3">
                  <Input
                    id="txtfas_ledgerpartytinno"
                    value={form.tinNo}
                    onChange={(value) =>
                      updateField("tinNo", value)
                    }
                  />
                </Field>

                <Field label="TIN Date" className="pm-col-3">
                  <Input
                    id="txtfas_ledgerpartytindt"
                    value={form.tinDate}
                    type="date"
                    onChange={(value) =>
                      updateField("tinDate", value)
                    }
                  />
                </Field>

                <Field label="CST" className="pm-col-3">
                  <Input
                    id="txtfas_ledgerpartycst"
                    value={form.cst}
                    onChange={(value) =>
                      updateField("cst", value)
                    }
                  />
                </Field>

                <Field label="CST Date" className="pm-col-3">
                  <Input
                    id="txtfas_ledgerpartycstdt"
                    value={form.cstDate}
                    type="date"
                    onChange={(value) =>
                      updateField("cstDate", value)
                    }
                  />
                </Field>

                <Field label="SSI No" className="pm-col-3">
                  <Input
                    id="txtfas_ledgerpartyssino"
                    value={form.ssino}
                    onChange={(value) =>
                      updateField("ssino", value)
                    }
                  />
                </Field>

                <Field label="Service Tax No" className="pm-col-4">
                  <Input
                    id="txtfas_ledgerpartyservicetaxno"
                    value={form.serviceTaxNo}
                    onChange={(value) =>
                      updateField("serviceTaxNo", value)
                    }
                  />
                </Field>

                <Field label="ECC No" className="pm-col-4">
                  <Input
                    id="txtfas_ledgerpartyeccno"
                    value={form.eccNo}
                    onChange={(value) =>
                      updateField("eccNo", value)
                    }
                  />
                </Field>
              </div>
            </div>
          )}
        </section>

        {/* MSME */}
        <section className="pm-card">
          <SectionHeader
            id="msme"
            icon={<BadgeCheck size={18} />}
            title="MSME Details"
            description="Micro, Small and Medium Enterprise information"
          />

          {openSections.msme && (
            <div className="pm-section-body">
              <div className="pm-grid pm-grid-12">
                <Field label="MSME No" className="pm-col-4">
                  <Input
                    id="txtfas_ledgerpartymsmeno"
                    value={form.msmeNo}
                    onChange={(value) =>
                      updateField("msmeNo", value)
                    }
                    placeholder="MSME registration number"
                  />
                </Field>

                <Field label="MSME Date" className="pm-col-4">
                  <Input
                    id="txtfas_ledgerpartymsmedate"
                    value={form.msmeDate}
                    type="date"
                    onChange={(value) =>
                      updateField("msmeDate", value)
                    }
                  />
                </Field>

                <Field label="MSME Type" className="pm-col-4">
                  <Select
                    id="txtfas_ledgerpartymsmetype"
                    value={form.msmeType}
                    onChange={(value) =>
                      updateField("msmeType", value)
                    }
                  >
                    <option value="">Select MSME Type</option>
                    <option value="Micro">Micro</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                  </Select>
                </Field>
              </div>
            </div>
          )}
        </section>

        {/* TDS */}
        <section className="pm-card">
          <SectionHeader
            id="tds"
            icon={<WalletCards size={18} />}
            title="TDS Details"
            description="Tax deducted at source configuration"
          />

          {openSections.tds && (
            <div className="pm-section-body">
              <div className="pm-grid pm-grid-12">
                <div className="pm-col-3 pm-check-row">
                  <Checkbox
                    checked={form.tdsApplicable}
                    onChange={(value) =>
                      updateField("tdsApplicable", value)
                    }
                    label="TDS Applicable"
                  />
                </div>

                <Field label="TDS Section" className="pm-col-6">
                  <LookupField
                    id="txtfas_ledgerpartytdsname"
                    value={form.tdsSection}
                    onChange={(value) =>
                      updateField("tdsSection", value)
                    }
                    placeholder="Select TDS Section"
                    onSearch={() =>
                      console.log("Open TDS Search")
                    }
                    onNew={() =>
                      console.log("Create TDS Section")
                    }
                  />
                </Field>

                <Field label="TDS Per (%)" className="pm-col-3">
                  <Input
                    id="txtfas_ledgerpartytdsper"
                    value={form.tdsPer}
                    readOnly
                    placeholder="Auto"
                  />
                </Field>
              </div>
            </div>
          )}
        </section>

        {/* OLD TAX */}
        <section className="pm-card">
          <SectionHeader
            id="oldTax"
            icon={<FileClock size={18} />}
            title="Old Tax Details"
            description="Legacy taxation information"
          />

          {openSections.oldTax && (
            <div className="pm-section-body">
              <div className="pm-grid pm-grid-12">
                <Field label="TIN No" className="pm-col-3">
                  <Input
                    id="old-tin"
                    value={form.tinNo}
                    onChange={(value) =>
                      updateField("tinNo", value)
                    }
                  />
                </Field>

                <Field label="TIN Date" className="pm-col-3">
                  <Input
                    id="old-tin-date"
                    value={form.tinDate}
                    type="date"
                    onChange={(value) =>
                      updateField("tinDate", value)
                    }
                  />
                </Field>

                <Field label="CST" className="pm-col-3">
                  <Input
                    id="old-cst"
                    value={form.cst}
                    onChange={(value) =>
                      updateField("cst", value)
                    }
                  />
                </Field>

                <Field label="CST Date" className="pm-col-3">
                  <Input
                    id="old-cst-date"
                    value={form.cstDate}
                    type="date"
                    onChange={(value) =>
                      updateField("cstDate", value)
                    }
                  />
                </Field>
              </div>
            </div>
          )}
        </section>

        {/* MARKETING */}
        <section className="pm-card">
          <SectionHeader
            id="marketing"
            icon={<Megaphone size={18} />}
            title="Marketing Details"
            description="Payment terms, marketing user and credit limit"
          />

          {openSections.marketing && (
            <div className="pm-section-body">
              <div className="pm-grid pm-grid-12">
                <Field
                  label="Payment Term"
                  required
                  className="pm-col-5"
                >
                  <LookupField
                    id="txtfas_ledgerpartypaymentterm"
                    value={form.paymentTerm}
                    onChange={(value) =>
                      updateField("paymentTerm", value)
                    }
                    placeholder="Select payment term"
                    onSearch={() =>
                      console.log("Open Payment Term Search")
                    }
                  />
                </Field>

                <Field
                  label="Mkt By"
                  required
                  className="pm-col-4"
                >
                  <LookupField
                    id="txtfas_ledgerpartymkuser"
                    value={form.mktUser}
                    onChange={(value) =>
                      updateField("mktUser", value)
                    }
                    placeholder="Select user"
                    onSearch={() =>
                      console.log("Open User Search")
                    }
                  />
                </Field>

                <Field label="Credit Limit" className="pm-col-3">
                  <Input
                    id="txtfas_ledgerpartycreditlimit"
                    value={form.creditLimit}
                    onChange={(value) =>
                      updateField("creditLimit", value)
                    }
                    placeholder="0.00"
                  />
                </Field>
              </div>
            </div>
          )}
        </section>

        {/* LICENSE */}
        <section className="pm-card">
          <SectionHeader
            id="license"
            icon={<FileText size={18} />}
            title="License Details"
            description="FSSAI and Drug License information"
          />

          {openSections.license && (
            <div className="pm-section-body">
              <div className="pm-license-block">
                <div className="pm-subtitle">
                  F.S.S.A.I. License
                </div>

                <div className="pm-grid pm-grid-12">
                  <Field
                    label="F.S.S.A.I. Lic. No."
                    className="pm-col-6"
                  >
                    <Input
                      id="txtfas_ledgerpartyfssailicno"
                      value={form.fssaiLicNo}
                      onChange={(value) =>
                        updateField("fssaiLicNo", value)
                      }
                    />
                  </Field>

                  <Field label="Issue On" className="pm-col-3">
                    <Input
                      id="txtfas_ledgerpartyfassaiissueon"
                      value={form.fssaiIssueOn}
                      type="date"
                      onChange={(value) =>
                        updateField("fssaiIssueOn", value)
                      }
                    />
                  </Field>

                  <Field label="Expiry On" className="pm-col-3">
                    <Input
                      id="txtfas_ledgerpartyfassaiexpiryon"
                      value={form.fssaiExpiryOn}
                      type="date"
                      onChange={(value) =>
                        updateField("fssaiExpiryOn", value)
                      }
                    />
                  </Field>
                </div>
              </div>

              <div className="pm-license-block">
                <div className="pm-subtitle">
                  Drug License 20B
                </div>

                <div className="pm-grid pm-grid-12">
                  <Field label="Drug Lic No. 20B" className="pm-col-6">
                    <Input
                      id="txtfas_ledgerpartydruglicno20b"
                      value={form.drugLicNo20B}
                      onChange={(value) =>
                        updateField("drugLicNo20B", value)
                      }
                    />
                  </Field>

                  <Field label="Issue On" className="pm-col-3">
                    <Input
                      id="txtfas_ledgerpartydrug20bissueon"
                      value={form.drug20BIssueOn}
                      type="date"
                      onChange={(value) =>
                        updateField("drug20BIssueOn", value)
                      }
                    />
                  </Field>

                  <Field label="Expiry On" className="pm-col-3">
                    <Input
                      id="txtfas_ledgerpartydrug20bexpiryon"
                      value={form.drug20BExpiryOn}
                      type="date"
                      onChange={(value) =>
                        updateField("drug20BExpiryOn", value)
                      }
                    />
                  </Field>
                </div>
              </div>

              <div className="pm-license-block">
                <div className="pm-subtitle">
                  Drug License 21B
                </div>

                <div className="pm-grid pm-grid-12">
                  <Field label="Drug Lic No. 21B" className="pm-col-6">
                    <Input
                      id="txtfas_ledgerpartydruglicno21b"
                      value={form.drugLicNo21B}
                      onChange={(value) =>
                        updateField("drugLicNo21B", value)
                      }
                    />
                  </Field>

                  <Field label="Issue On" className="pm-col-3">
                    <Input
                      id="txtfas_ledgerpartydrug21bissueon"
                      value={form.drug21BIssueOn}
                      type="date"
                      onChange={(value) =>
                        updateField("drug21BIssueOn", value)
                      }
                    />
                  </Field>

                  <Field label="Expiry On" className="pm-col-3">
                    <Input
                      id="txtfas_ledgerpartydrug21bexpiryon"
                      value={form.drug21BExpiryOn}
                      type="date"
                      onChange={(value) =>
                        updateField("drug21BExpiryOn", value)
                      }
                    />
                  </Field>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* REMARKS */}
        <section className="pm-card">
          <SectionHeader
            id="remarks"
            icon={<FileText size={18} />}
            title="Remarks"
            description="Additional notes and internal comments"
          />

          {openSections.remarks && (
            <div className="pm-section-body">
              <textarea
                id="txtfas_ledgerpartyremarks"
                className="pm-textarea"
                rows={4}
                maxLength={512}
                value={form.remarks}
                onChange={(e) =>
                  updateField("remarks", e.target.value)
                }
                placeholder="Enter remarks or additional information..."
              />
            </div>
          )}
        </section>

        {/* AUDIT */}
        <section className="pm-card pm-audit-card">
          <SectionHeader
            id="audit"
            icon={<FileClock size={18} />}
            title="Audit & Status"
            description="Entry information and current status"
          />

          {openSections.audit && (
            <div className="pm-section-body">
              <div className="pm-grid pm-grid-12">
                <Field label="Entry By" className="pm-col-4">
                  <Input
                    id="txtfas_ledgerpartyentryuser"
                    value={form.entryBy}
                    disabled
                  />
                </Field>

                <Field label="Entry Date" className="pm-col-4">
                  <Input
                    id="txtfas_ledgerpartycdt"
                    value={form.entryDate}
                    readOnly
                  />
                </Field>

                <Field label="Status" required className="pm-col-4">
                  <Select
                    id="txtfas_ledgerpartystatus"
                    value={form.status}
                    onChange={(value) =>
                      updateField("status", value)
                    }
                  >
                    <option value="">Select Status</option>
                    <option value="A">Active</option>
                    <option value="D">DeActive</option>
                  </Select>
                </Field>
              </div>
            </div>
          )}
        </section>
      </main>

      {/* FOOTER */}
      <footer className="pm-footer">
        <div className="pm-footer-info">
          <span>
            <strong>User:</strong> DEVAPP
          </span>

          <span>
            <strong>Mode:</strong> New
          </span>

          <span>
            <strong>Timestamp:</strong> 16-Sep-2026 16:50:44
          </span>
        </div>

        <div className="pm-footer-actions">
          <button
            type="button"
            className="pm-btn pm-btn-secondary"
            onClick={handleLedgerReport}
          >
            <FileText size={17} />
            Ledger Report
          </button>

          <button
            type="button"
            className="pm-btn pm-btn-primary"
            onClick={handleSave}
          >
            <Save size={17} />
            Save Party
          </button>
        </div>
      </footer>
    </div>
  );
};

export default PartyMaster;
