import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import ModalBody from "./modal-body";
import { CustomInput } from "../form/custom-input";
import ModalButton from "../buttons/modal-button";
import {
  BaseModalDescription,
  BaseModalTitle,
} from "./confirmation-modals/base-modal";
import { setGitRepositoryUrl } from "#/state/initial-query-slice";
import { I18nKey } from "#/i18n/declaration";

interface CloneGitRepositoryModalProps {
  onClose: () => void;
}

export function CloneGitRepositoryModal({ onClose }: CloneGitRepositoryModalProps) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const repoUrl = formData.get("repoUrl")?.toString();

    if (repoUrl) dispatch(setGitRepositoryUrl(repoUrl));
    onClose();
  };

  return (
    <ModalBody>
      <div className="flex flex-col gap-2 self-start">
        <BaseModalTitle title="Clone git repository" />
        <BaseModalDescription
          description={
            <span>
              {'Clone git repository'}
            </span>
          }
        />
      </div>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
        <CustomInput
          label="Repository URL"
          name="repoUrl"
          required
          type="text"
          defaultValue={""}
        />

        <div className="flex flex-col gap-2 w-full">
          <ModalButton
            testId="clone-git-repository"
            type="submit"
            text={t(I18nKey.CONNECT_TO_GITHUB_MODAL$CONNECT)}
            className="bg-[#791B80] w-full"
          />
          <ModalButton
            onClick={onClose}
            text={t(I18nKey.CONNECT_TO_GITHUB_MODAL$CLOSE)}
            className="bg-[#737373] w-full"
          />
        </div>
      </form>
    </ModalBody>
  );
}
