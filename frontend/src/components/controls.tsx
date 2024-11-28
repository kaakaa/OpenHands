import { IoLockClosed } from "react-icons/io5";
import React from "react";
import { useSelector } from "react-redux";
import AgentControlBar from "./agent-control-bar";
import AgentStatusBar from "./agent-status-bar";
import { ProjectMenuCard } from "./project-menu/ProjectMenuCard";
import { useAuth } from "#/context/auth-context";
import { RootState } from "#/store";

interface ControlsProps {
  setSecurityOpen: (isOpen: boolean) => void;
  showSecurityLock: boolean;
  lastCommitData: GitHubCommit | null;
}

export function Controls({
  setSecurityOpen,
  showSecurityLock,
  lastCommitData,
}: ControlsProps) {
  const { gitHubToken } = useAuth();
  const { selectedGitHubRepository } = useSelector(
    (state: RootState) => state.initalQuery,
  );

  const projectMenuCardData = React.useMemo(
    () =>
      selectedGitHubRepository && lastCommitData
        ? {
            repoName: selectedGitHubRepository,
            lastCommit: lastCommitData,
            avatar: null, // TODO: fetch repo avatar
          }
        : null,
    [selectedGitHubRepository, lastCommitData],
  );

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <AgentControlBar />
        <AgentStatusBar />

        {showSecurityLock && (
          <div
            className="cursor-pointer hover:opacity-80 transition-all"
            style={{ marginRight: "8px" }}
            onClick={() => setSecurityOpen(true)}
          >
            <IoLockClosed size={20} />
          </div>
        )}
      </div>

      <ProjectMenuCard
        isConnectedToGitHub={!!gitHubToken}
        githubData={projectMenuCardData}
      />
    </div>
  );
}
