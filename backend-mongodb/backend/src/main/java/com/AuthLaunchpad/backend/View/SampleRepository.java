package com.AuthLaunchpad.backend.View;

import com.AuthLaunchpad.backend.Model.Sample;
import org.springframework.data.repository.CrudRepository;

public interface SampleRepository extends CrudRepository<Sample, Long> {
}
