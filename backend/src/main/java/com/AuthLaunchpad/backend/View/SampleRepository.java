package com.AuthLaunchPad.backend.View;

import com.AuthLaunchPad.backend.Model.Sample;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SampleRepository extends CrudRepository<Sample, Long> {
}
