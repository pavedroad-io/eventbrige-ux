export const ServiceConstants = {
  EVENTORCHESTRATOR: 'EventOrchestrator',
  WASABIS3: 'Wasabi-S3',
  AWSS3: 'AWS-S3',
  services: [
    { key: 'EventOrchestrator', displayName: 'Event Orchestrator' },
    { key: 'Wasabi-S3', displayName: 'Wasabi S3 storage' },
    { key: 'AWS-S3', displayName: 'AWS S3 storage' },
  ],
  displayName(key: string): string {
    for(const item of this.services) {
      if (item.key === key) {
        return item.displayName;
      }
    };
    return 'not found';
  }
};
